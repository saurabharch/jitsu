import * as React from "react"

function Svg(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" {...props}>
      <path
        d="M60.432 46.635c0-.102-.025-.203-.025-.305 0-.076-.025-.127-.025-.178a2.61 2.61 0 0 0-.102-.432 2.45 2.45 0 0 0-.457-.787c-.203-.228-.432-.406-.66-.532-.254-.128-.508-.203-.71-.254-.076 0-.127-.025-.178-.025.28-1.218-.076-2.156-.305-2.587l.05-.05.786-.863.05-.05c.178-.254.28-.508.355-.736.05-.203.102-.38.102-.558v-.483c-.025-.38-.076-.862-.33-1.395-.127-.254-.304-.533-.532-.787a3.13 3.13 0 0 0-.837-.66c-.025-.025-.05-.025-.076-.05a12.36 12.36 0 0 0-2.132-2.359l-.965-.76-.634-.457c-.305-.228-.532-.356-.634-.406l-.533-.355c-.076-.076-.127-.102-.153-.127 0 0 0-.025-.025-.076-.025-.076-.025-.178-.025-.355l.025-1.142.228-3.4.025-1.345c-.025-.685-.127-1.294-.254-1.852-.025-.127-.076-.254-.102-.38-.025-.102-.05-.153-.076-.203a1.8 1.8 0 0 0-.102-.254c-.025-.05-.025-.102-.076-.153-.05-.127-.102-.254-.178-.38l-.025-.025-.026-.076-.025-.05c-.127-.228-.28-.432-.432-.61-.076-.355-.203-.862-.43-1.446-.203-.508-.457-1.065-.837-1.624-.127-.203-.28-.38-.432-.558l.05-.05c.076-.076 1.852-1.953 3.272-4.388 2.613-4.54 1.75-7.306.558-8.828l-.025-.05-.026-.05c-1.14-1.27-2.714-2.03-4.617-2.283-3.984-.508-8.5 1.472-9.69 2.03l-2.182-2.385c-.203-.203-.406-.406-.634-.558l-.734-.425C35.2.287 34.632.135 34.023.058 32.83-.094 31.46.058 30 .44c-2.207.558-4.668 1.675-7.256 3.22s-5.276 3.552-7.89 5.936C11.65 12.488 9 15.558 7.083 18.5c-.965 1.446-1.75 2.866-2.334 4.236-.583 1.345-.965 2.64-1.117 3.806-.102.863-.102 1.675.076 2.4.076.33.178.635.33.94.178.38.406.735.685 1.04l2.258 2.36.254.254-.025.025-.076.152c-.05.076-.076.153-.127.203l-.076.153c-.025.076-.076.152-.102.228l-.076.153c-.025.076-.076.153-.102.228-.025.05-.05.102-.05.153l-.076.228c-.026.05-.026.102-.05.153-.025.076-.05.152-.076.254 0 .025-.025.05-.025.076s-.025.05-.025.076c-.026.076-.05.177-.076.254 0 .05-.025.102-.025.152 0 .025-.025.076-.025.102 0 .05-.025.102-.025.152s-.025.102-.025.153c-.026.102-.026.203-.05.33 0 .025 0 .05-.025.102v.026c0 .076-.025.152-.025.203 0 .102-.025.228-.025.33v1.27c0 .05 0 .102.025.153 0 .05 0 .127.025.203v.076c0 .05.025.127.025.178s.025.102.025.177c0 .025 0 .05.026.076 0 .025.025.076.025.102v.05c0 .05.025.102.05.203 0 .025 0 .025.025.05.025.05.025.102.025.127l.025.05c0 .025 0 .025.026.05l.025.05v.076c0 .025 0 .025.025.05l.025.05c0 .05.025.076.025.127.025.05.025.102.05.203v-.025.025c0 .025 0 .025.026.05.025.076.05.127.05.152.025.05.05.102.076.203l.025.025c.025.05.025.102.05.127l.025.05c0 .025.025.05.025.076s.025.076.05.102l.025.05c.025.025.025.076.05.102s.025.05.025.076c.025.05.05.102.076.178l.025.025c.025.025.025.05.05.076s.025.076.05.102a.42.42 0 0 1 .076.153l.025.025c.025.026.025.05.05.076.025.05.05.076.05.102.025.026.05.076.076.127v.025c.025.026.025.05.05.076a.37.37 0 0 0 .076.102c.025.025.05.076.102.153.025.025.05.05.05.076.025.05.05.076.076.1s.05.076.076.127c.025.025.05.076.076.102.025.05.05.076.102.102l.102.102c.05.05.076.102.127.152l.05.05.076.076.204.203.076.076.025.026c.05.05.127.1.177.177l.025.025c.025.025.05.025.076.076.076.076.152.127.228.203l.05.025.025.025.05.025c.076.05.127.102.203.153l.025.025c.025.025.05.025.05.025l.05.05c.05.05.102.076.153.127l.05.026.076.076c.05.025.127.076.177.102.026.025.05.05.102.05l.05.025.025.025h.025c.102.05.178.102.254.152l.05.025.304.153h.025l.046.014.152.076c.025 0 .05.025.076.025.026.025.05.025.102.05h.025c.05.025.102.05.153.05h.025c.05.025.102.05.178.076h.025l.05.025c.025 0 .05.025.076.025h.025a2.98 2.98 0 0 0 .254.076h.026c.127.05.254.076.38.102h.025c.102.026.228.05.33.076h.102c.102.026.203.05.305.05h.102c.076 0 .127.025.203.025 0 .026.025.05.025.076.177.482.355.965.558 1.42 2.994 8.295 11.29 14.74 20.75 15.93 9.463 1.167 19.584-5.124 23.694-13.623.177-.33.33-.634.482-.964.406-.432.735-.863.94-1.32.33-.28.406-.838.38-1.32M7.894 43.337"
        fill="#664f44"
      />
      <path
        d="M52.34 5.132a5 5 0 0 0-1.573-1.167c-.102-.05-.203-.076-.33-.1-.05-.026-.102-.076-.152-.102-.508-.203-1.04-.33-1.598-.406-2.74-.356-5.886.66-7.662 1.37-.102.05-.203.076-.305.127l-.457.203-.787.355c-.05.025-.076.025-.127.05l-.482-.558-.228-.254-.203-.228-.076-.1-1.85-2.132-.153-.178-.203-.228h-.025l-.533.127-.61.127c-.33-.153-.736-.254-1.193-.33-.913-.127-2.08 0-3.4.33s-2.816.913-4.39 1.7c-3.17 1.572-6.672 3.983-10.07 7.077-1.192 1.065-2.283 2.182-3.298 3.272-.99 1.065-1.878 2.157-2.69 3.197-1.65 2.156-2.892 4.236-3.704 6.113-.532 1.243-.862 2.385-.99 3.374-.102.7-.076 1.344.05 1.852.05.177.102.305.153.457.127.305.28.558.482.787l2.055 2.156.228.228.025-.025a.79.79 0 0 1 .203-.203l.102-.102c.05-.076.127-.126.177-.203.05-.05.076-.076.127-.102s.076-.076.127-.102l.05-.05c.05-.026.076-.076.127-.102.05-.05.126-.102.177-.152.025-.026.076-.05.102-.076h.026c.076-.05.127-.102.203-.153.05-.025.076-.05.127-.102.076-.05.127-.102.203-.153.05-.025.076-.05.127-.076.076-.05.152-.102.228-.127.05-.025.076-.05.127-.076.076-.05.153-.076.228-.127.05-.025.076-.05.127-.076l.05-.025c.076-.025.127-.076.203-.102.026-.025.076-.025.102-.05.05-.025.102-.05.178-.076l.152-.076.05-.025.38-.153c.05-.025.076-.025.127-.05s.076-.025.127-.05l.05-.025c.026 0 .05-.025.076-.025.052-.024.103-.024.18-.05h.05c.076-.025.127-.025.203-.05.05-.025.127-.025.178-.05.076-.025.152-.025.228-.05.026 0 .05-.025.102-.025.025 0 .076 0 .102-.025.076-.026.153-.026.228-.026s.127-.025.203-.025c.05 0 .102-.025.153-.025h.203c.254 0 .558 0 .863.025h.05a8.16 8.16 0 0 1 1.015.153c.076.025.178.025.254.05.025-.025.025-.076.05-.102.203-.33.38-.685.583-1.015 1.142-1.902 2.36-3.577 3.602-5.048.432-.508.863-.965 1.294-1.42 1.8-1.877 3.602-3.323 5.226-4.44.356-.254.735-.482 1.066-.7.482-.305.94-.558 1.37-.812a13.01 13.01 0 0 1 1.015-.532c.532-.28 1.015-.508 1.446-.685l.38-.152c.177-.076.355-.152.507-.203-.127-.025-.28-.025-.406-.025h-.508c-.127 0-.28 0-.406.025l-.812.076c-.102.025-.177.025-.28.05.685-.355 1.37-.61 2.004-.812a13.22 13.22 0 0 1 1.269-.305c.558-.102 1.09-.177 1.573-.203.33-.025.635-.025.913-.025s.558.025.787.025a8.23 8.23 0 0 1 1.344.177c-.127-.177-.28-.304-.43-.43-.305-.23-.634-.38-.94-.508-.127-.05-.228-.076-.33-.127-.076-.025-.152-.05-.203-.05.153-.025.28-.05.406-.05.152-.025.28-.025.432-.05 1.192-.102 2.257 0 3.044.127.94.177 1.523.406 1.523.406-.127-.254-.33-.482-.558-.685-.153-.127-.33-.254-.482-.355a9.36 9.36 0 0 1 .913.254c.76.228 1.395.508 1.902.736l.458.228c.05.025.076.05.102.05.457.254.7.432.7.432a1.92 1.92 0 0 0-.432-.761c-.05-.05-.102-.127-.152-.177h.025c.026 0 .05.025.102.025.025 0 .076.025.127.05a9.4 9.4 0 0 1 .862.38c.025 0 .025.025.05.025l.152.076c.127.076.254.127.38.228l.38.228c.076.05.127.076.203.127.127.102.28.203.406.33.153.127.28.254.406.38l.076.076c.102.102.203.203.28.305.178.203.33.432.482.66.177.28.305.61.432.94 0 .025 0 .05.025.05.076-.076.228-.228.406-.432 1.465-1.723 5.88-7.304 3.216-10.703"
        fill="#132134"
      />
      <path
        d="M58.9 46.812s.05-.38-.153-.735c0-.025-.025-.05-.025-.05l-.102-.102c-.05-.05-.102-.102-.177-.153a.54.54 0 0 0-.127-.076 1.71 1.71 0 0 0-.432-.127c-.127-.025-.254-.025-.406-.025h-.203v.05c0 .025.025.05.025.102 0 .025 0 .05.026.05.025.076.05.203.076.305 0 0 0 .025-.025.076v.025c-.076.178-.28.583-.736 1.09-.076.102-.152.177-.254.28-1.27 1.32-4.01 3.17-9.792 4.212-1.954.28-3.78.305-5.302.102-2.283-.28-3.983-1.015-4.795-2.004-.076-.076-.127-.177-.203-.254-.05-.076-.076-.127-.127-.203-.025-.025-.025-.05-.05-.076a4 4 0 0 1-.482-1.903c0-.786.254-1.522.66-2.08.33-.457.76-.812 1.294-.964.254-.076.533-.127.812-.102a.88.88 0 0 1 .228.025c.177.026.457.05.787.102.025 0 .076 0 .102.025 1.09.127 2.816.305 4.896.177 3.806-.228 8.803-1.42 13.343-5.53v-.026c.025-.355-.025-.964-.457-1.446-.076-.076-.153-.153-.254-.228-.05-.05-.127-.076-.177-.127-.076-.025-.127-.076-.178-.102l-.228-.153v-.025a.52.52 0 0 0-.102-.153c-1.168-1.776-2.79-2.816-3.45-3.298-.305-.228-.508-.33-.508-.33-1.395-.863-1.598-1.142-1.472-3.45l.228-3.424c0-.203.025-.38.025-.558v-.735c0-.127-.025-.254-.025-.355 0-.05 0-.102-.025-.152-.025-.127-.025-.254-.05-.38 0-.05-.026-.127-.026-.177 0-.076-.025-.127-.05-.203-.025-.05-.025-.127-.05-.177-.025-.076-.05-.153-.05-.228 0-.025-.025-.05-.025-.076s-.025-.05-.025-.076v-.025l-.025-.076c-.025-.05-.05-.102-.05-.152V22.9l-.025-.05-.025-.05c-.05-.102-.076-.203-.127-.28l-.026-.076c-.05-.076-.102-.178-.153-.254l-.05-.05c-.05-.05-.076-.102-.127-.152l-.05-.076c-.05-.076-.102-.127-.153-.177v-.203a8.28 8.28 0 0 1-.076-.355c0-.025-.025-.076-.025-.102v-.025c0-.05-.026-.076-.026-.127-.025-.102-.05-.203-.102-.305 0-.025-.025-.076-.025-.102l-.076-.228c-.025-.05-.025-.102-.05-.127-.025-.076-.05-.153-.102-.228l-.076-.153c-.025-.076-.076-.153-.102-.228l-.076-.153c-.05-.076-.076-.152-.127-.228l-.076-.153a2.13 2.13 0 0 1-.152-.254c-.025-.05-.05-.076-.076-.127-.025-.026-.05-.076-.076-.102-.076-.076-.127-.153-.203-.228l-.05-.025c-.102-.102-.178-.203-.28-.28l-.025-.025c-.05-.026-.1-.076-.126-.102h-.026c-.05-.026-.076-.05-.127-.076l-.025-.025c-.05-.025-.127-.076-.228-.127-.025-.025-.076-.025-.127-.05-.228-.076-.507-.177-.862-.28-.025 0-.05 0-.076-.025-.28-.076-.61-.153-.965-.203-.127-.026-.228-.026-.355-.05-.05 0-.102 0-.178-.025h-.076c-.28-.026-.532-.05-.812-.05h-.025c-.355 0-.7.025-1.04.102.076-.127.305-.28.508-.406.28-.152.532-.254.532-.254a2.72 2.72 0 0 0-.457.051c-.05 0-.102.025-.153.025-.025 0-.076 0-.1.026h-.025c-.026 0-.05 0-.076.025-.787.178-1.547.457-1.98.635l-.153.076h-.025c-.05 0-.076 0-.127.025.305-.583.76-.887 1.117-1.04.05-.025.127-.05.178-.076.025 0 .025 0 .05-.025.05-.025.102-.025.127-.05.076-.025.127-.025.127-.025h-.406a6.04 6.04 0 0 0-2.309.761c-.457.254-.863.533-1.218.812-.102.025-.177.05-.28.05-.965.203-2.054.457-3.196.812-.432.127-.863.28-1.294.432l-1.015.38-.736.304c-1.75.787-3.5 1.827-4.946 3.222l-.152.153-.38.38-.153.152c-.05.076-.127.153-.177.203a10.3 10.3 0 0 0-.787.989 8.92 8.92 0 0 0-.508.812l-.025.025c-.33.583-.634 1.192-.862 1.877-.127.33-.228.685-.33 1.04-.025.102-.05.178-.076.28l-.025.05a9.7 9.7 0 0 0-.223 1.195c0 .076-.025.153-.025.254-.025.203-.05.406-.05.634-.025.203-.025.38-.025.583v.787a6.22 6.22 0 0 0 .025.685v.025c0 .23.026.457.05.71 0 .102.025.203.025.305v.076c0 .05 0 .102.025.177.025.254.076.533.102.812 0 .076.026.153.026.228.05.228.076.482.127.71 0 0-.05-.305-.025-.76 0-.102.025-.228.025-.33.026-.254.076-.558.178-.837l.076-.228c0-.025.025-.05.05-.102.05-.127.127-.28.203-.406.025.102.025.203.05.28v1.344c.025.863.102 1.903.28 2.79 0 0 .025-1.598.305-1.8 0 0 .482 2.994.913 4.11.05.152.127.254.178.33v-.305l-.05-1.648v-.178c.33.685.7 1.37 1.142 2.106.127.203.228.406.355.61-.812.7-1.573 1.75-2.132 2.968-.076.203-.177.406-.254.61-.05.127-.076.228-.127.355 0 .025-.026.076-.026.102-.025.076-.05.178-.076.254 0 .05-.025.076-.025.127-.025.076-.05.177-.076.254 0 .05-.025.076-.025.127l-.076.38c-.025.127-.05.254-.05.38 0 .05 0 .076-.025.127 0 .102-.025.178-.025.28 0 .05 0 .102-.025.153 0 .102-.025.177-.025.28v.888a1.57 1.57 0 0 0 .025.33v.076c0 .127.025.254.05.406 0 .05 0 .076.025.127 0 .102.025.178.05.28 0 .05.025.102.025.152.025.076.025.178.05.254 0 .05.025.102.025.153.025.076.05.152.05.254.025.05.025.102.05.178s.05.178.076.254c.026.05.026.102.05.153.025.076.05.177.076.254.025.05.025.102.05.153.025.102.076.203.102.28.025.05.025.076.05.127l.38.837c.025.05.05.076.076.127l.153.305c.025.05.05.102.102.152.05.076.102.178.152.254.026.05.076.102.102.153.05.076.102.177.177.254.05.05.076.102.127.178l.177.254c.05.05.076.102.127.177.076.076.127.178.203.254.05.05.076.102.127.153.076.102.153.177.254.28l.127.127c.127.127.254.28.38.406 0 0-.076-.102-.178-.305-.025-.025-.05-.076-.05-.127l-.076-.153c-.025-.05-.05-.102-.076-.178a4.26 4.26 0 0 1-.355-1.827l.228.305c.076.178.203.406.33.66a1.14 1.14 0 0 1 .127.254c.203.356.406.76.66 1.142.305.482.61.94.94 1.37 0 0-.38-.812-.508-1.345-.025-.152-.05-.28-.025-.355.025.025.05.076.102.102.025.026.05.076.102.102a4.88 4.88 0 0 0 .228.304l.05.05c.05.05.076.127.127.178.05.076.102.153.177.228.533.685 1.27 1.598 1.776 2.08.178.153.33.28.432.33l-.736-1.32c1.675 1.37 8.626 3.12 15.45 1.167a17.87 17.87 0 0 0 2.461-.887c.482-.203.964-.457 1.446-.71l.076-.05a20.28 20.28 0 0 0 .99-.583c.254-.152.507-.33.735-.482a18.87 18.87 0 0 0 1.218-.913c.026-.025.05-.05.076-.05.38-.33.76-.685 1.09-1.04a15.43 15.43 0 0 0 1.217-1.446l.025-.026c.102-.127.178-.228.254-.355l.025-.025c.025-.05.05-.076.076-.127l.355-.508c.025-.05.05-.076.076-.127a1.72 1.72 0 0 1 .178-.279c.05-.076.076-.127.127-.203a1.02 1.02 0 0 0 .127-.228c.076-.127.153-.28.228-.406l.076-.153.153-.305.073-.155.025-.05c.05-.127.127-.254.178-.38v-.025c.228-.203.38-.406.532-.583.025-.025.05-.05.05-.076.152-.482.254-.86.254-1.217m-40.818-4.92c0-.025 0-.05-.025-.102-.076-.43-.153-.887-.177-1.344v-.102c-.076.025-.153.127-.254.254-.025.05-.076.102-.102.177-.228.432-.432 1.04-.432 1.04a4.97 4.97 0 0 0 .05-.609v-.076l.076-.635v-.076c.025-.254.076-.482.127-.7 0-.025 0-.05.025-.102v-.025c0-.025 0-.05.025-.076 0-.05.025-.076.025-.127.025-.177.076-.355.102-.532l.076-.43v-.05c0-.025 0-.05.025-.05v-.05c0-.025.025-.076.025-.102s0-.05.026-.076c0-.05.025-.102.025-.127s.025-.076.025-.102c0-.05.025-.102.025-.126s0-.05.025-.076c0-.025 0-.05.025-.05 0-.05.025-.076.025-.102v-.076l-.05.05c-.05.025-.076.076-.127.102l-.05.05c-.05.05-.102.102-.127.153l-.025.025-.152.228-.025.025c0 .025-.025.025-.025.05l-.076.153v.05c-.025.076-.076.153-.102.228a7.94 7.94 0 0 0-.203.583c-.025.05-.025.127-.05.153-.025.102-.05.203-.05.228v.025-.025c0-.076 0-.127.025-.203 0-.127.025-.28.025-.406 0-.102.026-.228.05-.33 0-.026 0-.076.025-.102 0-.05.025-.102.025-.153s.025-.102.025-.152v-.076c0-.05.025-.127.025-.177v-.177c0-.026 0-.05.025-.076.025-.076.05-.177.05-.254v-.025c.025-.05.025-.127.05-.178v-.025c.025-.127.076-.254.102-.38v-.05c0-.025 0-.05.025-.076.05-.203.127-.406.177-.583v-.026c.05-.152.127-.33.177-.482v-.025c.025-.076.05-.127.076-.203.05-.102.076-.203.127-.305 0-.025.025-.076.076-.177.025-.025.025-.076.05-.102.025-.05.05-.102.076-.177l.025-.05.432-.787c.025-.025.025-.076.05-.102v-.025l.026-.05c.05-.076.102-.178.152-.254.076-.127.127-.254.203-.355.127-.228.228-.432.305-.533.025-.076.05-.102.076-.127-.025 0-.153-.102-.355-.228-.254-.153-.61-.355-1.04-.558-.153-.076-.28-.127-.432-.203-.178-.076-.38-.152-.583-.228-.05-.025-.102-.025-.153-.05l-.507-.153-.356-.076c-.102-.026-.203-.026-.304-.05-.05 0-.102 0-.153-.026-.05 0-.1 0-.152-.025-.127 0-.28-.025-.406-.025h-.203c-.305 0-.583.025-.862.076h-.047a7.45 7.45 0 0 0-1.472.38c-.152.05-.305.127-.482.203-.05.025-.076.05-.127.05l-.153.076c-.457.228-.888.533-1.294.863h-.024c-.355.28-.66.61-.94.94l-.228.305c-.102.127-.177.254-.254.38a6.81 6.81 0 0 0-.431.735c-.05.102-.102.178-.127.28 0 .025-.025.025-.025.05-.254.61-.457 1.243-.533 1.928-.025.126-.025.254-.05.406v.05c0 .102-.025.203-.025.33v.457c0 .102 0 .203.025.305v.127c0 .076.025.152.025.228v.025c0 .05 0 .076.025.127 0 .076.026.153.026.203s.025.102.025.152c.025.076.025.127.05.203 0 .05.025.102.05.152v.025l.025.05v.05l.025.05c.026.05.026.102.05.152s.025.127.05.178.05.102.05.177l.026.05c.025.05.025.076.05.127s.05.102.076.177l.076.153c.025.025.025.05.05.076s.025.05.05.076l.076.152c.025.05.05.127.102.178a.54.54 0 0 0 .076.127c.025.05.076.127.102.177s.05.076.076.127.076.127.127.177c.025.05.05.076.076.102.05.05.076.127.127.177.025.025.05.076.076.102.05.05.102.127.152.178a.33.33 0 0 1 .076.102c.05.05.102.127.152.178l.076.076c.05.05.102.127.177.178l.076.076.178.178c.025.025.05.05.076.05.05.05.127.102.203.177.026.025.05.025.076.05.076.05.127.102.203.153.026.025.05.025.05.05l.228.152.05.026.228.152.05.026c.076.05.178.1.254.152l.05.025c.076.05.177.102.254.127l.05.025c.102.05.178.076.28.127l.025.025c.102.05.203.076.28.127h.026c.1.025.203.076.304.102h.025c.05.025.102.025.152.05s.102.025.178.05h.025l.33.076c.102.025.228.05.33.05.355.05.7.076 1.065.102h.254c.127 0 .228 0 .355-.025.153-.025.33-.025.508-.05l.43-.076c.228-.05.457-.102.66-.178.66-.177 1.218-.432 1.573-.7 0 0-.228-1.016-.406-2.03-.052-.053-.078-.155-.103-.256"
        fill="#90694c"
      />
      <path
        d="M34.38 4.194l-.076-1.015.508-1.117.203-.05c-.33-.152-.736-.254-1.192-.33-.913-.127-2.08 0-3.4.33s-2.816.913-4.39 1.7c-3.17 1.573-6.672 3.983-10.072 7.078-1.192 1.065-2.283 2.182-3.298 3.272-1 1.065-1.877 2.157-2.69 3.197-1.65 2.156-2.892 4.236-3.704 6.113-.532 1.243-.863 2.385-1 3.374-.102.7-.076 1.345.05 1.852.05.177.102.305.152.457a2.72 2.72 0 0 0 .482.787l2.055 2.157.228.228.025-.025c.05-.076.127-.153.203-.203l.025-.026.076-.076c.05-.076.127-.127.177-.203.05-.05.076-.076.127-.102s.076-.076.127-.102l.05-.05c.05-.025.076-.076.127-.102.05-.05.127-.102.178-.153.025-.025.076-.05.102-.076h.025c.076-.05.127-.102.203-.152.05-.025.076-.05.127-.102.076-.05.127-.102.203-.152.05-.025.076-.05.127-.076.076-.05.152-.102.228-.127.05-.026.076-.05.127-.076.076-.05.153-.076.228-.127.05-.025.076-.05.127-.076l.05-.025c.482-1.344 1.218-2.842 2.182-4.364 1.167-1.877 2.664-3.856 4.44-5.835 1.116-1.243 2.334-2.487 3.653-3.68a53.88 53.88 0 0 1 5.175-4.161 45.08 45.08 0 0 1 3.424-2.182c.102-.05.203-.127.33-.178a15.63 15.63 0 0 1 .887-.482 24.67 24.67 0 0 1 1.877-.888l-.305-.355-.05-.05-.38-.432L30.04 5.05l.025-1.827-.025-.025 1.497-.457 2.843 1.45"
        fill="#2f83c1"
      />
      <path
        d="M58.9 46.812s.05-.38-.153-.735c0-.025-.025-.05-.025-.05l-.102-.102c-.05-.05-.102-.102-.177-.153a.54.54 0 0 0-.127-.076 1.71 1.71 0 0 0-.432-.127c-.127-.025-.254-.025-.406-.025h-.203v.05c0 .025.025.05.025.102 0 .025 0 .05.026.05.025.076.05.203.076.305 0 0 0 .025-.025.076v.025c-.076.178-.28.583-.736 1.09-.076.102-.152.177-.254.28-1.27 1.32-4.01 3.17-9.792 4.212-1.954.28-3.78.305-5.302.102-2.283-.28-3.983-1.015-4.795-2.004-.076-.076-.127-.177-.203-.254-.05-.076-.076-.127-.127-.203-.025-.025-.025-.05-.05-.076a4 4 0 0 1-.482-1.903c0-.786.254-1.522.66-2.08.33-.457.76-.812 1.294-.964.254-.076.533-.127.812-.102a.88.88 0 0 1 .228.025c.177.026.457.05.787.102.025 0 .076 0 .102.025 1.09.127 2.816.305 4.896.177 3.806-.228 8.803-1.42 13.343-5.53v-.026c.025-.355-.025-.964-.457-1.446-.076-.076-.153-.153-.254-.228-.05-.05-.127-.076-.177-.127-.076-.025-.127-.076-.178-.102l-.228-.153v-.025a.52.52 0 0 0-.102-.153c-1.168-1.776-2.79-2.816-3.45-3.298-.305-.228-.508-.33-.508-.33-1.395-.863-1.598-1.142-1.472-3.45l.228-3.424c0-.203.025-.38.025-.558v-.735c0-.127-.025-.254-.025-.355 0-.05 0-.102-.025-.152-.025-.127-.025-.254-.05-.38 0-.05-.026-.127-.026-.177 0-.076-.025-.127-.05-.203-.025-.05-.025-.127-.05-.177-.025-.076-.05-.153-.05-.228 0-.025-.025-.05-.025-.076s-.025-.05-.025-.076v-.025l-.025-.076c-.025-.05-.05-.102-.05-.152V22.9l-.025-.05-.025-.05c-.05-.102-.076-.203-.127-.28l-.026-.076c-.05-.076-.102-.178-.153-.254l-.05-.05c-.05-.05-.076-.102-.127-.152l-.05-.076c-.05-.076-.102-.127-.153-.177l-.203-.203a1.02 1.02 0 0 0-.228-.127c-.025-.025-.05-.025-.076-.025l-.152-.076c-.025 0-.05-.026-.076-.026-.05-.025-.102-.025-.127-.05-.025 0-.05-.025-.102-.025s-.076-.025-.127-.025h-.558c-.025 0-.05 0-.076.025-.025 0-.05 0-.076.025-.05 0-.1.025-.177.05h-.05c-.153.05-.28.102-.432.153l-.05.025c-.05.025-.102.05-.178.076l-.076.025-.152.076-.076.05-.153.076-.076.05c-.05.025-.102.076-.153.102l-.05.025c-.05.05-.127.076-.178.127l-.025.025c-.076.05-.127.102-.203.127-.127.076-.254.177-.38.254-.102.076-.203.152-.33.228l-.05.025c-.102.076-.228.153-.33.203l-.05.025c-.102.076-.228.127-.33.203l-.05.025c-.102.076-.23.127-.356.178l-.05.025c-.127.05-.228.102-.355.152l-.05.025c-.127.05-.254.076-.38.127h-.02l-.406.076c-.23.025-.483.05-.71.05-.38 0-.76-.025-1.167-.076l-.38-.076c-.05 0-.102-.025-.127-.025L39.68 23.4c-.153-.025-.28-.076-.43-.102l-.71-.153c-.05 0-.102-.025-.127-.025s-.076-.025-.102-.025c-.05 0-.102-.026-.153-.026s-.102-.025-.153-.025h-.05c-.05 0-.102-.025-.127-.025-.102-.025-.203-.05-.33-.05-.025 0-.076 0-.102-.025-.076 0-.153-.025-.228-.025-.05 0-.076 0-.127-.025-.076 0-.127-.025-.203-.025H35.67c-.127 0-.228.025-.355.025h-.102c-.076 0-.153.025-.228.025h-.025c-.05 0-.076.025-.127.025-.076.025-.152.025-.228.05-.05 0-.102.025-.127.025-.076.025-.152.05-.228.05-.05 0-.076.026-.127.05-.076.025-.178.05-.254.076-.05.025-.076.025-.102.05a5.01 5.01 0 0 0-.355.152c-.965.558-1.8 1.32-2.435 2.182a9.43 9.43 0 0 0-.609.913c-.203.33-.356.685-.507 1.04-.05.102-.076.203-.127.305-.05.177-.127.355-.178.533 0 .025 0 .05-.025.05l-.153.634c-.05.228-.076.43-.102.66-.026.127-.026.228-.026.355-.025.33-.025.635 0 .965v.076c0 .076 0 .153.026.254a6.22 6.22 0 0 0 .102.685.74.74 0 0 1 .051.254c.025.076.025.153.05.228.152.583.38 1.117.66 1.572 1.04 1.802 2.765 2.892 4.034 3.476.482.203.99.406 1.522.583l-.05.05c-.102.025-.203.05-.33.076-.177.05-.406.127-.634.203-.254.076-.558.203-.863.33-.812.33-1.725.812-2.537 1.472-.102.076-.203.177-.305.254-.178.153-.33.304-.482.482l-.127.127c-.05.076-.127.127-.178.203l-.076.076c-.076.102-.153.203-.203.305-.076.102-.127.203-.203.305-.482.837-.76 1.852-.685 3.07v-.05c0-.025 0-.05.025-.076v-.025c0-.025.025-.05.025-.102v-.025c0-.026.025-.076.025-.127s.025-.076.05-.127v-.03c.025-.05.025-.102.05-.152v-.025c.026-.05.026-.102.05-.153V44.2c.026-.05.05-.102.076-.178l.025-.025c.025-.05.05-.127.102-.177.05-.102.102-.178.153-.28.025-.025.05-.076.076-.102l.025-.025.153-.228c.05-.05.1-.127.152-.177l.05-.05c.05-.05.076-.102.127-.127l.05-.05c.05-.05.127-.1.177-.177 0 0-1.09 2.487-.61 4.44v-.38c0-.05 0-.102.025-.153 0-.05 0-.102.026-.153v-.025c0-.05.025-.127.025-.178v-.05c.025-.076.025-.127.05-.203v-.025c.025-.076.05-.153.05-.203 0-.026.025-.05.025-.076l.026-.05c.025-.05.05-.127.076-.178.025-.076.076-.152.127-.228 0-.026.025-.05.025-.05l.152-.228s-.05.61-.05 1.345c0 .127 0 .228.025.355 0 .076 0 .152.025.228a10.02 10.02 0 0 1 .406-2.207c-.203.685-.355 1.42-.406 2.207-.025.507-.025 1.015.026 1.547.076.887.305 1.85.684 2.84 0 0-.355-1.142.153-2.283l.153.305c.05.33.102.812.203 1.344.102.888.508 3.552 2.334 5.403 0 0-.685-.887-.583-2.03.076.152.152.28.203.406.305.583.913 1.65 1.598 2.4 0 0-.532-1.04-.406-1.27 0 0 1.776 2.207 2.334 2.4l-.735-1.217-.025-.026c2.562 1.878 6.113 2.562 10.477 1.345.76-.203 1.522-.482 2.334-.812.482-.203.964-.457 1.446-.71l.076-.05c.33-.177.66-.38 1-.583.254-.153.507-.33.735-.483a18.87 18.87 0 0 0 1.218-.913c.025-.025.05-.05.076-.05.38-.33.76-.685 1.09-1.04a15.43 15.43 0 0 0 1.217-1.446l.026-.025a3.2 3.2 0 0 0 .254-.355l.025-.025c.026-.05.05-.076.076-.127l.356-.508c.025-.05.05-.076.076-.126.05-.102.102-.178.178-.28.05-.076.076-.127.127-.203s.102-.152.127-.228c.076-.127.153-.28.228-.406l.076-.152.23-.457.025-.05c.05-.127.127-.254.178-.38v-.025c.228-.203.38-.406.532-.583.025-.026.05-.05.05-.076a1.87 1.87 0 0 0 .327-1.06m-41.02-6.47c-.076.025-.153.127-.254.254-.025.05-.076.102-.102.177-.228.432-.432 1.04-.432 1.04a4.97 4.97 0 0 0 .05-.609v-.076l.076-.635v-.076c.025-.254.076-.482.127-.7 0-.025 0-.05.025-.102v-.025c0-.025 0-.05.025-.076 0-.05.025-.076.025-.127.025-.177.076-.355.102-.532l.076-.43v-.05c0-.025 0-.05.025-.05v-.05c0-.025.025-.076.025-.102s0-.05.026-.076c0-.05.025-.102.025-.127s.025-.076.025-.102c0-.05.025-.102.025-.126s0-.05.025-.076c0-.025 0-.05.025-.05 0-.05.025-.076.025-.102v-.076l-.05.05c-.05.025-.076.076-.127.102l-.05.05c-.05.05-.102.102-.127.153l-.025.025-.152.228-.025.025c0 .025-.025.025-.025.05l-.076.153v.05c-.025.076-.076.153-.102.228a7.94 7.94 0 0 0-.203.583c-.025.05-.025.127-.05.153-.025.102-.05.203-.05.228v.025-.025c0-.076 0-.127.025-.203 0-.127.025-.28.025-.406 0-.102.026-.228.05-.33 0-.026 0-.076.025-.102 0-.05.025-.102.025-.153s.025-.102.025-.152v-.076c0-.05.025-.127.025-.177v-.177c0-.026 0-.05.025-.076.025-.076.05-.177.05-.254v-.025c.025-.05.025-.127.05-.178v-.025c.025-.127.076-.254.102-.38v-.05c0-.025 0-.05.025-.076.05-.203.127-.406.177-.583v-.026c.05-.152.127-.33.177-.482v-.025c.025-.076.05-.127.076-.203.05-.102.076-.203.127-.305 0-.025.025-.076.076-.177.025-.025.025-.076.05-.102.025-.05.05-.102.076-.177l.025-.05c-.025-.025-.076-.025-.102-.05h-.025l-.05-.025c-.228-.102-.482-.203-.735-.28h-.05c-.178-.05-.33-.076-.508-.102-.102 0-.203-.026-.305-.026h-.25c-.127 0-.254.026-.38.026-.05 0-.076 0-.127.025-.05 0-.127.026-.178.026-.025 0-.05 0-.076.025-.05 0-.076.025-.127.025-.076.025-.178.05-.254.076-.025 0-.076.026-.102.026-.102.05-.228.076-.33.127-.05.025-.076.05-.127.05l-.203.102c-.05.025-.102.05-.153.102-.05.025-.102.05-.152.102-.05.026-.102.076-.153.102-.025.025-.076.05-.102.076-.076.076-.178.152-.254.228l-.127.127c-.076.076-.127.153-.203.228l-.025.025c-.026.05-.076.076-.102.127l-.076.076c-.127.178-.254.38-.356.583-.025.025-.025.05-.05.076-.05.102-.076.203-.127.305-.025.05-.025.076-.05.127-.026.102-.076.203-.102.33v.102c-.025.076-.025.152-.05.228 0 .05 0 .076-.025.127 0 .05 0 .076-.025.127v.102c0 .127-.025.254 0 .38 0 .102 0 .203.025.304v.05c0 .05.025.102.025.153.025.203.076.38.127.583a7.31 7.31 0 0 0 .153.406c.1.254.228.482.38.7.305.457.7.863 1.192 1.167a3.4 3.4 0 0 0 .862.406 3.49 3.49 0 0 0 .913.203c.076 0 .153.025.203.025h.33c.102 0 .203-.025.305-.025.05 0 .127 0 .178-.025l.432-.076h.025c.05-.025.102-.025.177-.05a3.01 3.01 0 0 0 .508-.203l.025-.025c.05-.025.102-.05.127-.05-.076-.43-.152-.887-.177-1.344.128-.056.128-.08.128-.106"
        fill="#fce9cd"
      />
      <path d="M35.013 4.498l.076.05z" fill="#4d9ed7" />
      <path
        d="M57.363 45.772c0-.025 0-.05-.025-.05-.026-.05-.026-.076-.026-.102-.127-.406-.28-.7-.43-.94-.178-.28-.33-.432-.33-.432l.076-.305a1.96 1.96 0 0 0 .05-.38c.102-.913-.127-1.624-.33-2.03a1.29 1.29 0 0 0-.076-.177l-.432.304c-2.74 1.852-5.8 3.045-9.132 3.552-2.283.355-4.693.38-7.205.076l.05.025s-1.522.203-1.928 1.65l.025.025-.127.965c.05 1.32.634 2.13 1.32 2.56.7.28 1.573.482 2.537.61 1.65.203 3.577.153 5.505-.152 2.588-.356 6.24-1.725 8.854-3.5.583-.406 1.142-.837 1.598-1.27l.05-.05c0-.177-.025-.28-.025-.38"
        fill="#fff"
      />
      <path
        d="M52.416 33.24c-1.395-.863-1.598-1.142-1.472-3.45l.228-3.425.025-.558v-.735c0-.127-.025-.254-.025-.355 0-.05 0-.102-.025-.153-.025-.127-.025-.254-.05-.38 0-.05-.026-.127-.026-.177 0-.076-.025-.127-.05-.203-.025-.05-.025-.127-.05-.178a3.51 3.51 0 0 0-.71-.787l-.05-.05-.05-.024h-.025c-.05-.026-.076-.05-.127-.076s-.102-.05-.127-.076c-.406-.254-.887-.406-1.37-.482-.28-.05-.558-.05-.837-.05-.127 0-.28.026-.406.026a9.05 9.05 0 0 0-1.091.228l-.38.254-.33.228-.05.025a2.26 2.26 0 0 1-.33.203l-.05.025c-.102.076-.23.127-.33.203l-.05.025c-.102.076-.228.127-.355.178l-.05.025-.355.153-.05.025c-.127.05-.254.076-.38.127h-.025l-.406.076-.7.05c-.38 0-.76-.025-1.167-.076l-.38-.076c-.05 0-.102-.025-.127-.025l-1.014-.228c-.153-.025-.28-.076-.432-.102l-.7-.153c-.05 0-.102-.025-.127-.025a4.17 4.17 0 0 0-.583.05h-.05a8.51 8.51 0 0 0-1.725.406c-.025 0-.05.025-.102.025-.102.026-.178.076-.28.102l-.355.153c-.837.355-1.624.863-2.385 1.497-.305.254-.583.532-.862.812-.406.432-.76.887-1.1 1.37-.025.026-.025.05-.05.076a6.5 6.5 0 0 0-.458.786l-.152.28v.025c-.153.33-.28.635-.38.965 0 .025 0 .05-.025.05-.026.05-.026.102-.05.153-.05.152-.102.304-.127.457-.05.152-.076.305-.102.482 0 .025-.025.076-.025.102-.025.102-.025.203-.05.28l-.1 1.065v.254a5.83 5.83 0 0 0 .66 1.573c1.04 1.802 2.765 2.892 4.033 3.476l1.522.583.025.025.025-.025c.076-.05.127-.102.203-.153.025-.025.05-.025.076-.05l.228-.152c.025-.026.05-.026.076-.05l.228-.152c.025-.025.05-.025.076-.05l.254-.152c.025-.025.05-.025.076-.05l.254-.153c.025-.025.05-.025.076-.05l.254-.153c.025-.026.076-.026.102-.05l.254-.152c.025-.026.076-.05.102-.05.076-.05.178-.102.28-.152.05-.025.076-.05.127-.05.102-.05.177-.102.28-.127.05-.025.076-.05.127-.05l.28-.127.152-.076.28-.127c.05-.025.102-.05.178-.076.1-.025.177-.076.28-.102.05-.025.127-.05.177-.076.102-.025.178-.076.28-.102l.203-.076c.102-.025.178-.076.28-.102l.228-.076c.076-.025.177-.05.254-.102l.508-.152.28-.076.254-.076c.102-.025.203-.05.33-.102.05-.025.102-.025.152-.05.406-1.04 1.65-3.628 3.755-3.907l.635-.05h.152c-.025-.153-.05-.305-.05-.482-.076-1.117.28-2.055.76-2.08.38-.025.685.533.736.7.152.33.254.76.28 1.243a4.41 4.41 0 0 1-.102 1.192c.05.05.076.102.127.127.482.6.558 1.42.532 2.03.178-.025.38-.025.583-.05.05 0 .102 0 .152-.025h.102l.735-.05 1.7-.102-.53-.278m5.302 15.627a15.67 15.67 0 0 1-2.84 2.004l-1.42.685c-1.04.457-2.03.76-2.917 1-1.954.483-3.298.483-3.298.483 1.065.583 2.4.583 3.323.507.635-.05 1.066-.178 1.066-.178-.025.38-.076.735-.127 1.1a5.47 5.47 0 0 1-.305 1.015v.025c-.153.38-.355.7-.558 1.015-.025.025-.05.076-.076.102l.076-.05 1-.583.735-.482 1.218-.913c.025-.025.05-.05.076-.05l1.1-1.04a15.43 15.43 0 0 0 1.218-1.446l.025-.026c.102-.127.178-.228.254-.355l.025-.025c.025-.05.05-.076.076-.127l.355-.508c.025-.05.05-.076.076-.127a1.72 1.72 0 0 1 .178-.279l.127-.203c.05-.076.102-.153.127-.228l.228-.406.33-.66c.05-.127.127-.254.177-.38-.102.028-.152.078-.228.154M34.58 38.644c-.254.076-.558.203-.862.33-.812.33-1.725.812-2.537 1.472-.102.076-.203.177-.305.254a4.35 4.35 0 0 0-.482.482l-.128.128c-.05.076-.127.127-.178.203l-.076.076c-.076.102-.152.203-.203.305-.076.102-.127.203-.203.305-.482.837-.76 1.852-.685 3.07v-.05c0-.025 0-.05.026-.076v-.026c0-.025.025-.05.025-.102v-.027c0-.025.025-.076.025-.127s.026-.076.05-.127v-.025c.025-.05.025-.102.05-.153v-.025c.025-.05.025-.102.05-.152v-.025c.025-.05.05-.102.076-.177l.025-.026c.026-.05.05-.127.102-.178l.152-.28c.026-.025.05-.076.076-.102l.025-.026.152-.228c.05-.05.102-.127.153-.178l.05-.05c.05-.05.076-.102.127-.127l.05-.05c.05-.05.127-.102.178-.177 0 0-1.1 2.486-.6 4.44v-.38c0-.05 0-.102.025-.152 0-.05 0-.102.025-.153v-.025c0-.05.025-.127.025-.177v-.05c.025-.076.025-.127.05-.203v-.024a.75.75 0 0 0 .05-.203c0-.025.025-.05.025-.076l.025-.05c.025-.05.05-.127.076-.178.026-.076.076-.152.127-.228 0-.026.025-.05.025-.05L30.32 45l-.05 1.344c0 .127 0 .228.025.355 0 .076 0 .153.025.228.05-.786.203-1.522.406-2.207l.178-.557c0-.026.025-.05.025-.076l.203-.507c.025-.026.025-.05.05-.102l.228-.482c.025-.025.025-.05.025-.076l.532-.913c.026-.026.026-.05.05-.076l.228-.33c.025-.025.025-.05.05-.076s.025-.05.05-.076l.28-.38c.026-.025.026-.05.05-.05l.305-.356.38-.43c.102-.102.177-.203.28-.28l.102-.102.6-.583c.558-.508 1.015-.837 1.167-.94l-.33.076c-.154.08-.357.155-.6.23m14.615-5.494s0-.05-.025-.153c-.102-.356-.457-1.218-1.852-1.1-1.472.153-1.98 1.345-2.106 1.75-.025.076-.025.127-.025.127l.05.025c.177-.153.532-.153.862.076.153.102.254.203.355.33.127.203.153.406.076.558l-.076.076s.05.025.153.05c.406.127 1.548.355 2.156-.43.026-.05.05-.076.076-.127-.127-.05-.178-.228-.178-.457 0-.102.025-.203.05-.33.076-.303.303-.48.48-.405m-7.332 10.858l-2.435.457c.025 0 .076 0 .102.026 1.1.127 2.816.304 4.896.177 3.806-.228 8.803-1.42 13.343-5.53V39.1c.026-.355-.025-.965-.457-1.446-.076-.076-.152-.152-.254-.228-.025 0-.025-.025-.05-.025-.127-.076-.228-.127-.33-.203l-.228-.152v-.025a8.11 8.11 0 0 1-.965 1.142c-.127.127-.254.254-.406.38-1.243 1.117-2.867 2.08-4.617 2.842-2.9 1.268-6.138 2.106-8.598 2.613m-24.05-6.62c-.05.025-.076.076-.127.102l-.05.05c-.05.05-.102.102-.127.153l-.026.025-.152.228-.025.025c0 .025-.025.025-.025.05l-.076.153v.05c-.026.076-.076.152-.102.228a7.94 7.94 0 0 0-.203.583c-.025.05-.025.127-.05.153a1.97 1.97 0 0 0-.051.228v.025-.025c0-.076 0-.127.025-.203 0-.127.026-.28.026-.406 0-.102.025-.228.05-.33 0-.025 0-.076.025-.102 0-.05.025-.102.025-.152s.025-.102.025-.153v-.076c0-.05.025-.127.025-.177v-.178c0-.025 0-.05.025-.076a.88.88 0 0 0 .05-.254v-.025c.025-.05.025-.127.05-.178v-.025c.025-.126.076-.254.102-.38v-.05c0-.025 0-.05.025-.076.05-.203.127-.406.178-.583v-.025c.05-.153.127-.33.177-.482v-.025c.025-.076.05-.127.076-.203.05-.102.076-.203.127-.304 0-.026.025-.076.076-.178.025-.025.025-.076.05-.102.025-.05.05-.102.076-.177l.026-.05c-.026-.025-.076-.025-.102-.05h-.025l-.05-.025c-.228-.102-.482-.203-.736-.28h-.05a3.51 3.51 0 0 0-.508-.102c-.102 0-.203-.025-.305-.025H16c-.127 0-.254.025-.38.025-.05 0-.076 0-.127.025-.05 0-.127.025-.177.025-.025 0-.05 0-.076.025-.05 0-.076.026-.127.026-.076.025-.178.05-.254.076-.025 0-.076.025-.102.025-.102.05-.228.076-.33.127-.05.025-.076.05-.127.05l-.203.102c-.05.025-.102.05-.153.102-.05.025-.102.05-.153.102-.05.025-.102.076-.152.102-.025.026-.076.05-.102.076-.076.076-.177.153-.254.228l-.127.127c-.076.076-.127.152-.203.228l-.025.025c-.025.05-.076.076-.102.126l-.076.076a4.36 4.36 0 0 0-.355.583c-.026.025-.026.05-.05.076-.05.102-.076.203-.127.305-.025.05-.025.076-.05.127 0 .025.025.05.025.076.025.102.05.177.076.28v.05c.025.076.076.177.1.254.102.254.203.482.33.685.025.025.025.05.05.076v.025l.025.025a2.52 2.52 0 0 0 .228.38c.127.177.228.305.305.406l.05.05c0 .025.025.025.025.025l.05.05c0-.05-.025-.102-.025-.127a4.16 4.16 0 0 1-.102-.964v-.05c0-.203 0-.406.025-.583l.076.228c.025.102.076.203.102.305v.05a5.26 5.26 0 0 0 .507 1.066 4.81 4.81 0 0 0 .508.735c.026.025.05.05.05.076l.05.05c-.076-.355-.127-.685-.127-1.015v-.33c0-.152 0-.28.025-.406a5.05 5.05 0 0 0 .203.66v.025a7.4 7.4 0 0 0 .837 1.598l.025.025c.05.05.076.102.102.152.026.025.05.05.05.076l.075.075v-.05c0-.05-.025-.102-.025-.153l-.076-.508c0-.102-.026-.228-.026-.33v-.56c0-.127.026-.28.026-.406.025.076.05.178.076.254.025.05.05.127.076.178v.025l.025.025c.025.076.05.153.076.203.05.127.102.254.178.355.076.153.127.28.203.38.05.076.076.127.102.178.05.076.102.153.127.203.05.05.076.102.102.153l.025.025c.025.05.076.076.102.127.026.025.05.05.05.076.05.05.076.102.102.102l.025.025V41l.076-.634V40.3a5.27 5.27 0 0 1 .127-.7c0-.025 0-.05.025-.102v-.025c0-.025 0-.05.025-.076 0-.05.025-.076.025-.127.025-.177.076-.355.102-.533l.076-.43v-.05c0-.025 0-.05.025-.05v-.05c0-.025.026-.076.026-.102s0-.05.025-.076c0-.05.025-.102.025-.127s.025-.076.025-.102c0-.05.025-.102.025-.127s0-.05.025-.076c0-.025 0-.05.025-.05 0-.05.026-.076.026-.102v-.076l.128.08M48.56 47.98l.913-.33c.482-.203.735-.355.735-.406-.025-.05-.305-.025-.812.102-.254.05-.558.102-.94.203a4.18 4.18 0 0 1-.583.102c-.203.026-.432.076-.66.102-.458.076-.965.127-1.522.177l-.837.076c-.28.025-.583.025-.888.05-1.217.025-2.562-.025-3.932-.28a8.62 8.62 0 0 1-2.384-.838l-.025-.025c.406-1.446 1.928-1.65 1.928-1.65l-.05-.025h-.076a15.13 15.13 0 0 1-.583-.076c-.127-.025-.228-.025-.305-.05-.076 0-.153-.025-.178-.025-.913-.05-1.42.7-1.572 1.04l-.076.152a3.14 3.14 0 0 0-.254 1.015c-.05.685.127 1.42.66 2.055.355.432.965.812 1.75 1.117-.685-.432-1.294-1.27-1.32-2.562.787.33 1.674.533 2.36.66 1.446.28 2.866.305 4.1.228l.913-.076a12.04 12.04 0 0 1 .863-.102l1.523-.28c.228-.05.457-.102.66-.178a3.25 3.25 0 0 0 .583-.179"
        fill="#f2d2ac"
      />
      <path
        d="M47.367 31.033c.76.025 1.27.254 1.624.61.076-.33.127-.735.102-1.192-.025-.482-.127-.913-.28-1.243-.05-.203-.356-.736-.736-.71-.482.025-.837.965-.76 2.08 0 .152.025.305.05.457m1.27 2.866c0 .203.076.38.178.457.177.102.406-.102.507-.432 0-.025.025-.05.025-.076.076-.305 0-.61-.177-.685-.178-.102-.406.102-.508.43 0 .102-.025.204-.025.305m-3.45.558a1.19 1.19 0 0 0 .355.355c.33.203.685.228.887.05l.076-.076c.076-.152.05-.355-.076-.558-.076-.127-.203-.254-.355-.33-.33-.203-.685-.228-.863-.076-.025.025-.05.05-.076.102-.076.126-.05.33.052.532M57.794 39.1c-.026 0-.026 0 0 0m-.406 7.028a12.08 12.08 0 0 1-1.624 1.293c-2.613 1.776-6.265 3.172-8.854 3.502-1.953.305-3.856.355-5.505.152-.965-.127-1.802-.33-2.537-.61-.786-.305-1.395-.685-1.75-1.117-.533-.635-.685-1.395-.66-2.054.025-.356.102-.71.254-1.016l.076-.152c.178-.33.66-1.117 1.572-1.04a.58.58 0 0 1 .178.025c.076 0 .203.026.305.05l.583.076h.076c2.51.305 4.92.28 7.205-.076 3.323-.508 6.393-1.7 9.132-3.552l.432-.305 1.497-2.232c-4.54 4.135-9.54 5.328-13.343 5.556a24.93 24.93 0 0 1-4.896-.178c-.05 0-.076 0-.102-.025-.33-.05-.583-.076-.787-.102-.102 0-.177-.025-.228-.025a2.15 2.15 0 0 0-.812.102c-.507.152-.964.507-1.294.964-.406.558-.66 1.32-.66 2.08 0 .634.153 1.294.482 1.902.025.025.025.05.05.076.05.076.076.127.127.203s.127.178.203.254c.787.99 2.51 1.7 4.795 2.004 1.547.203 3.35.178 5.302-.102 5.784-1.04 8.524-2.917 9.792-4.21.102-.102.177-.178.254-.28.457-.533.66-.94.736-1.09v-.025c.025-.05.025-.076.025-.076l-.025.027"
        fill="#664f44"
      />
      <path
        d="M38.995 26.087c-.178-.102-.38-.178-.583-.228l-.406-.076c-.05 0-.102 0-.152-.025-.685-.05-1.27.05-1.27.05-.127.025-.254.05-.355.102a4.03 4.03 0 0 0-2.004 1.32c-.355.457-.61.94-.735 1.42-.026.05-.026.076-.026.127-.025.127-.076.254-.102.355-.076.406-.127.76-.127 1.066l.025.66c.153-.355.33-.66.508-.964.432-.736.888-1.345 1.37-1.827.913-.94 1.85-1.446 2.56-1.7.762-.255 1.295-.28 1.295-.28m10.984-1.295l-.025-.05c-.102-.127-.228-.254-.38-.355-.355-.228-.837-.355-1.497-.228 0 0-.787.177-1.243.7 0 0 1.37-.583 2.84.457.127.102.28.203.406.33s.28.254.406.432c0 0-.05-.635-.432-1.193-.025-.05-.05-.075-.076-.1"
        fill="#e9b784"
      />
      <path
        d="M39.173 34.89l1.725-.457c.102-.482.127-1.065.05-1.7-.178-1.472-.837-2.613-1.497-2.537s-1.04 1.345-.862 2.816c.1.762.303 1.42.583 1.878"
        fill="#664f44"
      />
      <path
        d="M36.154 1.733l-1.37.305.28 2.487-3.628-1.853-1.497.458.025.025 4.414 5.023.102-.05.406-.254c.05-.025.102-.05.153-.102l.61-.356L33.77 5.26 36.8 6.73l.28-.152-.28-2.157 1.37 1.598h.025c.127-.05.228-.127.355-.178l.05-.025.05-.026c.025 0 .05-.025.05-.025l.152-.076s.025 0 .025-.025l.482-.228-3.198-3.704"
        fill="#ffd250"
      />
      <path
        d="M34.8 2.113v-.076.076m0-.076l.203-.05c-.33-.153-.736-.254-1.192-.33-.913-.127-2.08 0-3.4.33s-2.816.913-4.39 1.7c-3.17 1.572-6.672 3.983-10.072 7.077-1.192 1.065-2.283 2.182-3.298 3.272l4.1 5.073c1.117-1.218 2.308-2.435 3.628-3.628 1.75-1.598 3.526-3.02 5.276-4.236 1.7-1.193 3.4-2.207 4.997-3.02l-.7-3.246.026-1.827-.026-.025 1.497-.458 2.917 1.497-.076-1.015.507-1.115"
        fill="#4d9ed7"
      />
      <path
        d="M34.8 2.037l-.508 1.117.076 1.04.7.355zM33.77 5.26l3.044 1.497-1.167.66zm3.044-.838l.28 2.157 1.09-.558z"
        fill="#132134"
      />
      <path
        d="M48.28 3.635h.56c.507 0 .99.076 1.446.178.025 0 .05 0 .076.025h.025l.05.026h.05c-.05-.026-.102-.076-.153-.102-.507-.203-1.04-.33-1.598-.406-2.74-.356-5.886.66-7.66 1.37-.102.05-.203.076-.305.127l-.457.203-.787.355c-.05.025-.076.025-.127.05l-.482.23s-.026 0-.026.025l-.152.076c-.026 0-.05.026-.05.026h-.102l-.026.025a2.34 2.34 0 0 0-.355.178h-.025c-.025.025-.05.025-.076.05h-.025c-.026 0-.05.025-.05.025l-.532.28c-.127.076-.254.127-.38.203h-.025l-.28.152c-.305.153-.583.33-.888.508-.025.025-.05.025-.102.05-.025.025-.05.025-.076.05s-.05.025-.076.05l-.025.025-.61.356c-.05.025-.102.05-.153.102l-.406.254-.102.05-1.142.76-1.852 1.32c-.076.05-.152.126-.228.177-1.598 1.192-3.12 2.487-4.59 3.806l-4.44 4.338-1.928 2.004-1.624 1.878s.102-.076.28-.254l-.406.482c2.334-2.486 4.896-5.023 7.662-7.407a74.38 74.38 0 0 1 5.226-4.135c.786-.558 1.598-1.117 2.41-1.65.254-.177.532-.33.787-.507.127-.076.254-.153.406-.228a1.02 1.02 0 0 1 .228-.127c.153-.076.28-.178.432-.254.127-.076.28-.153.406-.254.076-.05.153-.076.228-.127l.532-.305c.102-.05.203-.127.305-.178l1.015-.532c.025-.025.05-.025.076-.05l.153-.076c.076-.025.127-.076.203-.102.025-.025.05-.025.076-.05l.152-.076s.025 0 .025-.025h.025a6.45 6.45 0 0 1 .431-.203c.026 0 .05-.025.076-.05l.153-.076c.178-.076.33-.152.508-.228.05-.025.102-.05.127-.076.025 0 .05-.025.076-.025.05-.025.102-.05.152-.05.203-.076.38-.178.583-.254.178-.076.33-.153.508-.228a37.24 37.24 0 0 1 2.689-1.015c1.575-.435 2.97-.713 4.187-.764"
        fill="#fff"
      />
    </svg>
  )
}

export default Svg
