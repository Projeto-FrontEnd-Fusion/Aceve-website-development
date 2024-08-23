"use client";
import type { IbannerProps } from "@/@types/bannerTypes";
import { Button } from "../button/GlobalButton";
import Link from "next/link";
import clsx from "clsx";
import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import { useStore } from "zustand";
import { BiDonateHeart } from "react-icons/bi";

const BannerHero = ({
  title,
  description,
  action,
  bannerImg,
  ...props
}: IbannerProps) => {
  const { isOpenMenu } = useStore(toggleMenuStore);

  return (
    <section
      {...props}
      className={clsx(
        "w-full  flex flex-col relative ",
        "desktop:overflow-y-hidden desktop:flex-row-reverse",
        { "-z-10": isOpenMenu === false }
      )}
    >
      <figure className="relative w-full h-auto desktop:w-[70%]">
        <img
          src={"https://i.imgur.com/NE6EVuK.png"}
          alt="Imagem de um banner representando empoderamento e igualdade"
          className="w-full border-slate-950"
        />
        <div
          className={clsx(
            "absolute",
            "inset-x-0",
            "bottom-[-2px]",
            "h-1/2",
            "bg-gradient-to-t",
            "from-purple-haiti",
            "to-transparent",
            "desktop:h-auto",
            "desktop:w-1/2",
            "desktop:inset-y-0",
            "desktop:left-0",
            "desktop:bg-gradient-to-r",
            "desktop:from-purple-haiti",
            "desktop:to-transparent"
          )}
        ></div>
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
        <div className="shadeContainer"></div>
      </figure>

      <article
        className={clsx(
          "w-screen bg-purple-haiti px-7 flex flex-col gap-4 mt-[-8px] py-10 items-center",
          "desktop:justify-center desktop:items-start desktop:pl-24 desktop:w-[80%]"
        )}
      >
        <h2
          className={clsx(
            "text-white-normal font-montserrat font-bold mb-4 text-[20px] leading-7 ",
            " mobileMicro:pr-8",
            "mobileXLarger:w-full mobileXLarger:pr-[50%] mobileXLarger:leading-8",
            "laptop:pr-[60%] laptop:text-[32px]",
            "mobileMini:text-[28px] desktop:text-[36px] desktop:leading-[36px]",
            "desktopLarge:text-[56px] desktopLarge:pr-[40%] desktopLarge:leading-[56px]"
          )}
          // consertei o texto desproporcional em telas entre 412px e 480px
        >
          {title}
        </h2>
        <p
          className={clsx(
            "w-full text-white-normal font-roboto text-[14px] mb-8 leading-6",
            "mobileMicro:text-[12px]",
            "mobileXLarger:text-[16px]",
            "text-[18px] desktop:text-[18px] desktop:mb-10 desktop:w-full desktop:leading-7"
          )}
        >
          {description}
        </p>

        <Button
          backgroundColor="purple"
          size="small"
          fontColor="white"
          icon={<BiDonateHeart />}
        >
          <Link href={"/doe-agora"}>Doe Agora</Link>
        </Button>
      </article>
    </section>
  );
};

export default BannerHero;
