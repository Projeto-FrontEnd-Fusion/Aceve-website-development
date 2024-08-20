"use client";
import type { IbannerProps } from "@/@types/bannerTypes";
import { Button } from "../button";
import Link from "next/link";
import clsx from "clsx";
import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import { useStore } from "zustand";

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
        "w-screen flex flex-col relative hero-banner lg:flex-row",
        { "-z-10": isOpenMenu === false }
      )}
    >
      <figure className="relative">
        <img
          src={bannerImg}
          alt="Imagem de um banner representando empoderamento e igualdade"
          className="w-full"
        />
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
        <div className="shadeContainer"></div>
      </figure>

      <article className="w-screen bg-purple-haiti px-7 flex flex-col gap-4 mt-[-8px] py-10 items-center">
        <h2
          className={clsx(
            "text-white-normal font-montserrat font-bold mb-4 text-[20px] leading-7",
            "mobileSmall:w-full mobileSmall:text-[28px]"
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            "text-white-normal font-roboto text-[14px] mb-8 leading-6",
            "mobileSmall:w-full text-[18px]"
          )}
        >
          {description}
        </p>

        <Button Background="purple" size="small" fontColor="white">
          <Link href={"/doe-agora"}>Doe Agora</Link>
        </Button>
      </article>
    </section>
  );
};

export default BannerHero;
