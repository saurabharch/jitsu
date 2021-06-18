package redis

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gomodule/redigo/redis"
	"github.com/jitsucom/jitsu/server/drivers/base"
	"github.com/jitsucom/jitsu/server/logging"
	"github.com/jitsucom/jitsu/server/meta"
	"strings"
	"time"
)

const (
	scanChunkSize = 2000

	keyField   = "redis_key"
	valueField = "value"
)

var keyConstructors = make(map[string]func(keyName string) key)

//key is a redis key type that gets value with underlying logic depends on key type
type key interface {
	get(conn redis.Conn) ([]map[string]interface{}, error)
	name() string
}

//registerKey registers function to create new redis key instance
func registerKey(keyType string, createKeyFunc func(keyName string) key) {
	keyConstructors[keyType] = createKeyFunc
}

//Redis is a Redis driver. It is used in syncing data from Redis.
type Redis struct {
	collection     *base.Collection
	connectionPool *redis.Pool
	redisKey       string
}

func init() {
	if err := base.RegisterDriver(base.RedisType, NewRedis); err != nil {
		logging.Errorf("Failed to register driver %s: %v", base.RedisType, err)
	}
}

//NewRedis returns configured Redis driver instance
func NewRedis(ctx context.Context, sourceConfig *base.SourceConfig, collection *base.Collection) (base.Driver, error) {
	config := &RedisConfig{}
	err := base.UnmarshalConfig(sourceConfig.Config, config)
	if err != nil {
		return nil, err
	}

	err = config.Validate()
	if err != nil {
		return nil, err
	}

	parameters := &RedisParameters{}
	if err := base.UnmarshalConfig(collection.Parameters, parameters); err != nil {
		return nil, err
	}
	if err := parameters.Validate(); err != nil {
		return nil, err
	}

	intPort, err := config.Port.Int64()
	if err != nil {
		return nil, fmt.Errorf("Error casting redis port [%s] to int: %v", config.Port.String(), err)
	}

	redisConfig := &meta.RedisConfiguration{
		Host:          config.Host,
		Port:          int(intPort),
		Password:      config.Password,
		TLSSkipVerify: config.TLSSkipVerify,
	}

	if redisConfig.Port == 0 && !redisConfig.IsURL() && !redisConfig.IsSecuredURL() {
		redisConfig.Port = 6379
		logging.Warnf("[%s] port wasn't provided. Will be used default one: %d", sourceConfig.SourceID, redisConfig.Port)
	}

	pool, err := meta.NewRedisPool(redisConfig)
	if err != nil {
		return nil, err
	}

	return &Redis{
		collection:     collection,
		connectionPool: pool,
		redisKey:       parameters.RedisKey,
	}, nil
}

//GetAllAvailableIntervals returns ALL constant
func (r *Redis) GetAllAvailableIntervals() ([]*base.TimeInterval, error) {
	return []*base.TimeInterval{base.NewTimeInterval(base.ALL, time.Time{})}, nil
}

//GetObjectsFor iterates over keys by mask and parses hash,string,list,set,zset types
//returns all parsed object or err if occurred
func (r *Redis) GetObjectsFor(interval *base.TimeInterval) ([]map[string]interface{}, error) {
	conn := r.connectionPool.Get()
	defer conn.Close()

	matchedKeys, err := r.scanKeys(conn, r.redisKey)
	if err != nil {
		return nil, err
	}

	var result []map[string]interface{}
	for _, redisKey := range matchedKeys {
		objects, err := redisKey.get(conn)
		if err != nil {
			return nil, err
		}

		for _, object := range objects {
			object[keyField] = redisKey.name()
			result = append(result, object)
		}
	}

	return result, nil
}

//TestConnection tests connection to Redis
//returns err if connection failed
func (r *Redis) TestConnection() error {
	//test connection
	connection := r.connectionPool.Get()
	defer connection.Close()

	_, err := redis.String(connection.Do("PING"))
	if err != nil {
		return err
	}

	return nil
}

//Type returns Redis type
func (r *Redis) Type() string {
	return base.RedisType
}

//GetCollectionTable returns collection table
func (r *Redis) GetCollectionTable() string {
	return r.collection.GetTableName()
}

//GetCollectionMetaKey returns collection meta key (key is used in meta storage)
func (r *Redis) GetCollectionMetaKey() string {
	return r.collection.Name + "_" + r.GetCollectionTable()
}

//Close closes redis pool
func (r *Redis) Close() error {
	return r.connectionPool.Close()
}

//scanKeys returns keys that fit the keyMask
func (r *Redis) scanKeys(conn redis.Conn, keyMask string) ([]key, error) {
	//plain key
	if !strings.HasSuffix(keyMask, "*") {
		redisKey, err := r.exploreKey(conn, keyMask)
		if err != nil {
			return nil, err
		}

		return []key{redisKey}, nil
	}

	//by mask
	var redisKeys []key
	cursor := 0

	for {
		scannedResult, err := redis.Values(conn.Do("SCAN", cursor, "MATCH", keyMask, "COUNT", scanChunkSize))
		if err != nil {
			return nil, err
		}

		if len(scannedResult) != 2 {
			return nil, fmt.Errorf("error len of SCAN result: %v", scannedResult)
		}

		cursor, _ := redis.Int(scannedResult[0], nil)
		keyNames, _ := redis.Strings(scannedResult[1], nil)

		for _, keyName := range keyNames {
			redisKey, err := r.exploreKey(conn, keyName)
			if err != nil {
				return nil, err
			}

			redisKeys = append(redisKeys, redisKey)
		}

		//end of cycle
		if cursor == 0 {
			break
		}
	}

	return redisKeys, nil
}

//exploreKey returns key instance or err if unsupported key type
func (r *Redis) exploreKey(conn redis.Conn, key string) (key, error) {
	redisType, err := redis.String(conn.Do("TYPE", key))
	if err != nil {
		return nil, err
	}

	keyConstructor, ok := keyConstructors[redisType]
	if !ok {
		return nil, fmt.Errorf("unsupported redis key type to sync: %s", redisType)
	}

	return keyConstructor(key), nil
}

//parseJSON parses input string as
// 1. JSON object string - "{1: 2}"
// 2. JSON objects array string - "[{}, {}]"
// 3. JSON array string - "[1,2]"
// 4. plain string - "12"
func parseJSON(value string) ([]map[string]interface{}, error) {
	//JSON object string
	if strings.HasPrefix(value, "{") && strings.HasSuffix(value, "}") {
		object := map[string]interface{}{}
		err := json.Unmarshal([]byte(value), &object)
		if err != nil {
			return nil, err
		}

		return []map[string]interface{}{object}, nil
	}

	//JSON objects array string
	if strings.HasPrefix(value, "[{") && strings.HasSuffix(value, "}]") {
		var objectsIfaces []interface{}
		err := json.Unmarshal([]byte(value), &objectsIfaces)
		if err != nil {
			return nil, err
		}

		var result []map[string]interface{}
		for _, objectIface := range objectsIfaces {
			object, ok := objectIface.(map[string]interface{})
			if !ok {
				return nil, fmt.Errorf("error parsing JSON objects array - object: %v has type: %T", objectIface, objectIface)
			}

			result = append(result, object)
		}

		return result, nil
	}

	//JSON array string
	if strings.HasPrefix(value, "[") && strings.HasSuffix(value, "]") {
		var objects []interface{}
		err := json.Unmarshal([]byte(value), &objects)
		if err != nil {
			return nil, err
		}

		var result []map[string]interface{}
		for _, object := range objects {
			result = append(result, map[string]interface{}{valueField: object})
		}

		return result, nil
	}

	//plain string
	return []map[string]interface{}{{valueField: value}}, nil
}
