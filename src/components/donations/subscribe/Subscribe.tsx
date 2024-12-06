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

      <div>

        <img
          className={clsx("w-full h-40 max-w-96")}
          src={"https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/10e101f2-edcc-45c8-a865-cc91ccee1719.png"}
          alt={""}
        />

        <FormSubscribe />
      </div>
    </section>
  )
}