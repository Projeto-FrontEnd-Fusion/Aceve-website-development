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
        "md:overflow-y-hidden md:flex-row-reverse",
        { "-z-10": isOpenMenu === false }
      )}
    >
      <figure className="relative w-[90%] self-center h-auto md:w-[70%]">
        <Image
        alt="Imagem de um banner representando empoderamento e igualdade"
        src={BannerImg}
        className="object-contain object-center"/>
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
      </figure>

      <article
        className={clsx(
          "w-screen px-7 flex flex-col gap-1 mt-[-8px] py-10 items-center",
          "md:justify-center md:items-start md:pl-[2.5rem] md:w-[80%]"
        )}
      >
      <h2
  className={clsx(
    "text-black font-montserrat font-bold mb-4 text-[20px] w-full leading-tight",
    "mobileXLarger:leading-8",
    "laptop:text-[32px]",
    "mobileMini:text-[28px] desktop:text-[36px] desktop:leading-[36px]",
    "desktopLarge:text-[56px] desktopLarge:pr-[40%] desktopLarge:leading-[56px]",
    "whitespace-nowrap"
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
</h2>

        <p
          className={clsx(
            "w-full text-gray-600 font-roboto text-[14px] mb-8 leading-6",
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
          w-full md:w-fit py-3 md:px-6  
          flex-grow md:flex-grow-0"
        >
          <Link href={"/doe-agora"}>AJUDE AGORA</Link>
        </Button>
      </article>
    </section>
  );
};

export default BannerHero;
