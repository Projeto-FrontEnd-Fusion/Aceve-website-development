import clsx from "clsx";
import { FormSubscribe } from "./forms/Forms";

export function Subscribe() {
  return (
    <section className="py-8 flex flex-col items-center gap-4">
      <h2 className="text-xl text-[#222222] font-bold leading-[120%]">
        SEJA VOLUNTÁRIO
      </h2>
      <p className="font-roboto font-light leading-[150%] text-gray-normal text-center">
        Cada ação conta, cada voluntário faz a diferença!
      </p>

      <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:gap-8 md:min-h-full">

        <div className={clsx("w-full max-w-[470px] min-h-60 md:max-h-[800px] ")}>
          <img
            className="w-full max-h-60 md:max-h-[780px] md:min-h-[750px]"
            src={"https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/10e101f2-edcc-45c8-a865-cc91ccee1719.png"}
            alt={""}
          />
        </div>

        <FormSubscribe />
      </div>
    </section>
  )
}