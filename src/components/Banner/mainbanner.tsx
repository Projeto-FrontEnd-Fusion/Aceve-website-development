"use client";
import { Button } from "../button/GlobalButton";
import Link from "next/link";
import clsx from "clsx";
import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import { useStore } from "zustand";
import Image from "next/image";
import BannerImg from "@/assets/BannerImg.png";

const BannerHero = () => {
  const { isOpenMenu } = useStore(toggleMenuStore);

  return (
    <section
      className={clsx(
        "w-full  flex flex-col relative gap-4 px-4 py-4 mobileXLarger:pt-0 mobileXLarger:pr-0 tablet:pl-8 laptop:pl-[72px]",
        "mobileXLarger:overflow-y-hidden mobileXLarger:flex-row-reverse",
        { "-z-10": isOpenMenu === false }
      )}
    >
      <figure
        className="relative w-full self-center h-auto mobileXLarger:flex-shrink-0 mobileXLarger:flex-grow-0
      mobileXLarger:w-[292px] mobileXLarger:h-[524px] 
      mobileXLarger:px-0
      tablet:w-[356px] tablet:h-[488px] 
      laptop:w-[464px] laptop:h-[628px] 
      desktop:w-[572px] desktop:h-[601px] 
      desktopLarge:w-[700px] desktopLarge:h-[683px]"
      >
        <Image
          alt="Imagem de um banner representando empoderamento e igualdade"
          src={BannerImg}
          className="object-cover object-center mobileXLarger:h-full mobileXLarger:w-full"
        />
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
      </figure>

      <article
        className={clsx(
          "flex flex-col gap-4",
          "mobileXLargerpy-10 tablet:mr-6 desktop:mr-16",
          "mobileXLarger:justify-center mobileXLarger:items-start mobileXLarger:w-auto"
        )}
      >
        <h1
          className={clsx(
            "text-black leading-7 mobileXLarger:leading-[46px] font-bold text-[18px] tablet:text-[40px] mobileXLarger:text-[35px] mobileMicro:text-[24px] w-full",
            "whitespace-normal"
          )}
        >
          <span className="text-[#54287B] font-bold">
            Pelo poder de cada{" "}
            <span className="text-primary-500 font-bold">mulher</span>
          </span>
          <br />
          <span className="text-[#54287B] font-bold">
            Por um futuro mais{" "}
            <span className="text-primary-500 font-bold">justo</span>
          </span>
        </h1>

        <p
          className="w-full text-gray-600 text-[14px]
          leading-5 
          md:text-[18px] laptop:leading-7 laptop:text-[1.25rem] md:w-full md:leading-7"
        >
          Capacitamos mulheres em situação de vulnerabilidade para que
          conquistem autonomia, rompam ciclos de violência e transformem suas
          vidas.
        </p>

        <Link
          className="bg-[#823DC7] text-[#FFFFFF] flex justify-center hover:bg-[#663198] active:bg-[#54277B] font-semibold rounded-md transition-colors 
          w-full mobileXLarger:w-fit py-4 mobileXLarger:px-5
          flex-grow mobileXLarger:flex-grow-0 focus:outline-primary-400"
          href={"/quero-doar"}>AJUDE AGORA</Link>
      </article>
    </section>
  );
};

export default BannerHero;
