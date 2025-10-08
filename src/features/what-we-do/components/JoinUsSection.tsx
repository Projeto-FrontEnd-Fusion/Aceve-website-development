import Image from "next/image";
import joinussectionIMG from "@/assets/joinussectionIMG.png";
import { GlobalLink } from "@/components/GlobalLink/GlobalLink";

export default function JoinUsSection() {
  return (
    <section className="relative w-full  h-[40.8125rem] mx-auto overflow-hidden flex flex-col justify-end px-4 sm:px-10">
      <Image
        src={joinussectionIMG}
        alt="Foto do grupo de voluntários "
        fill
        className="object-cover"
        priority
      />

      <div
        className="relative z-10 flex flex-col gap-4 bg-white-normal/50 backdrop-blur-[2px] rounded-2xl
        w-full h-auto p-2 py-5 my-[2.69rem]
        sm:p-6 sm:my-[2.69rem]
        sm:max-w-md md:max-w-lg lg:absolute lg:w-[29.375rem] lg:h-[12rem] lg:right-10 lg:bottom-10 mx-auto"
      >
        <h2 className="font-inter font-semibold text-[1.875rem] leading-[2.25rem] tracking-[-0.015em] text-primary-800">
          Gostou?
        </h2>
        <p className="font-inter font-semibold text-[1.125rem] leading-[1.5rem] tracking-[-0.005em] text-primary-700">
          Nos ajude a transformar vidas
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <GlobalLink
            variant="primary"
            href="/quero-doar"
            className="w-full md:flex-1 h-14 gap-2 px-5 py-4 text-base font-inter font-semibold text-center"
          >
            Faça sua doação
          </GlobalLink>

          <GlobalLink
            href="/voluntariar"
            variant="outlined-primary-700"
            className="w-full md:flex-1 h-14 gap-2 px-5 py-4 text-base font-inter font-semibold text-center"
          >
            Quero Voluntariar
          </GlobalLink>
        </div>
      </div>
    </section>
  );
}
