"use client";
import { Button } from "../button/GlobalButton";
import Link from "next/link";
import clsx from "clsx";
import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import { useStore } from "zustand";
import Image from "next/image";
import BannerImg from '@/public/BannerImg.png'

const BannerHero = () => {
  const { isOpenMenu } = useStore(toggleMenuStore);

  return (
    <section
      className={clsx(
        "w-full  flex flex-col relative ",
        "mobileXLarger:overflow-y-hidden mobileXLarger:flex-row-reverse",
        { "-z-10": isOpenMenu === false }
      )}
    >
      <figure className="relative w-[90%] self-center h-auto mobileXLarger:flex-shrink-0 mobileXLarger:flex-grow-0
      mobileXLarger:w-[292px] mobileXLarger:h-[524px] 
      tablet:w-[356px] tablet:h-[488px] 
      laptop:w-[464px] laptop:h-[628px] 
      desktop:w-[572px] desktop:h-[601px] 
      desktopLarge:w-[700px] desktopLarge:h-[683px]">
        <Image
          alt="Imagem de um banner representando empoderamento e igualdade"
          src={BannerImg}
          className="object-cover object-center mobileXLarger:h-full mobileXLarger:w-full" />
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
      </figure>

      <article
        className={clsx(
          "w-screen  flex flex-col gap-1 mt-[-8px] items-center",
          "py-10 px-10 desktop:px-16 desktopLarge:px-20",
          "mobileXLarger:justify-center mobileXLarger:items-start mobileXLarger:w-auto"
        )}
      >
        <h1
          className={clsx(
            "text-black font-montserrat font-bold mb-4 text-[18px] tablet:text-[40px] mobileXLarger:text-[35px] mobileMicro:text-[30px] w-full",
            "whitespace-normal"
          )}
        >
          <span className="text-[#54287B] font-bold">
            Pelo poder de cada{" "}
            <span className="text-[#A468E4] font-bold">mulher</span>
          </span>
          <br />
          <span className="text-[#54287B] font-bold">
            Por um futuro mais{" "}
            <span className="text-[#A468E4] font-bold">justo</span>
          </span>
        </h1>

        <p
          className={clsx(
            "w-full text-gray-600 font-roboto text-[14px] mb-8 mobileXLarger:mb-[16px] leading-6",
            "mobileXLarger:text-[16px]",
            "text-[18px] md:text-[18px] desktop:mb-10 md:w-full md:leading-7"
          )}
        >
          Capacitamos mulheres em situação de vulnerabilidade para que conquistem autonomia, rompam ciclos de violência e transformem suas vidas.
        </p>

        <Button
          Background="purple"
          size="small"
          fontColor="white"
          className="bg-[#823DC7] hover:bg-[#663198] font-semibold rounded-md transition-colors 
          w-full mobileXLarger:w-fit py-3 mobileXLarger:px-6  
          flex-grow mobileXLarger:flex-grow-0"
        >
          <Link href={"/quero-doar"}>AJUDE AGORA</Link>
        </Button>
      </article>
    </section>
  );
};

export default BannerHero;
