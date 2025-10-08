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
        className="relative z-10 flex flex-col gap-4 bg-white-normal/50 backdrop-blur-[2px]   rounded-2xl
    w-full h-auto p-2 py-5 my-[2.69rem]
    sm:p-6 sm:my-[2.69rem]
    lg:absolute lg:w-[29.375rem] lg:h-[12rem] lg:right-10 lg:bottom-10"
      >
        <h2 className="font-inter font-semibold text-[1.875rem] leading-[2.25rem] tracking-[-0.015em] text-primary-800">
          Gostou?
        </h2>
        <p className="font-inter font-semibold text-[1.125rem] leading-[1.5rem] tracking-[-0.005em] text-primary-700">
          Nos ajude a transformar vidas
        </p>
        <GlobalLink
          variant="primary"
          href="/quero-doar"
          className="px-5 py-4 text-lg"
        >
          Faça sua doação
        </GlobalLink>
      </div>
    </section>
  );
}
