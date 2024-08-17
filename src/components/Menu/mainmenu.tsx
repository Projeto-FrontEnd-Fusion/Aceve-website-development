"use client";
import Link from "next/link";
import { useState, type ComponentProps } from "react";
import type React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import clsx from "clsx";
import { ButtonPrimarySmall } from "./Button";

interface ImenuHeader extends ComponentProps<"nav"> {
  logo?: string;
  logoSimios?: string;
  description?: string;
  icon?: React.ReactNode;
  options?: string[];
}
const menuOptions: string[] = [
  "Página Inicial",
  "Quem Somos",
  "Contato",
  "Nosso Brechó",
  "Grupo Símios",
  "Doe agora",
];

const headerDetails: ImenuHeader = {
  logo: "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/8ec4791d-e61a-4e48-abb1-bcc54d343bbd.png",
  logoSimios:
    "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/8487ce9f-664c-4a4d-a8de-287508c9996d.png",
  description: "Associação Cultural e Educacional Violeta Eliz",
  options: menuOptions,
};

export default function Mainmenu({
  logo,
  description,
  logoSimios,
  ...props
}: ImenuHeader) {
  const [isOpenMenu, setisOpenMenu] = useState<boolean>(false);
  return (
    <>
      <nav {...props} className="overflow-hidden">
        <header
          className={clsx(
            "flex py-4 items-center border-b-2 drop-shadow-md h-14",
            "mobileSmall:h-20",
            // "xl:bg-red-500"
          )}
        >
          <figure className="border-r-2 border-gray-stroker ml-4">
            <img
              src={headerDetails.logo}
              alt={headerDetails.description}
              className={clsx("w-20 pr-2", "mobileSmall:w-24")}
            />
            <figcaption className="sr-only">
              Esse é o logo da ong Violeta Eliz
            </figcaption>
          </figure>
          <h1
            className={clsx(
              "text-[10px] leading-none text-purple-light",
              "w-32 px-1",
              "mobileSmall:w-[45%] mobileSmall:px-12 mobileSmall:pl-2 mobileSmall:text-[12px] font-semibold",
              "md:text-[14px] md:w-[30%]",
              "mobileLarger:w-[35%]"
            )}
          >
            {headerDetails.description}
          </h1>

          <section className="donate-button-menu hidden gap-2 w-[360px] justify-center md:flex  lg:w-[50%] lg:justify-end">
            <ButtonPrimarySmall btnType="secondary" title="Brechó" />
            <ButtonPrimarySmall btnType="primary" title="Doar Agora" />
            {/* <figure>
              <img src={headerDetails.logoSimios} alt="Logo Grupo simios" />
            </figure> */}
          </section>

          <figure
            className={clsx(
              "flex items-center justify-end flex-1 mr-6 cursor-pointer",
              "md:mr-4"
            )}
            onClick={() => setisOpenMenu(!isOpenMenu)}
          >
            {isOpenMenu ? (
              <IoClose size={32} />
            ) : (
              <GiHamburgerMenu className="text-[24px] md:text-[32px]" />
            )}
          </figure>
        </header>

        <ul
          className={clsx(
            " overflow-hidden drop-shadow-r-lg h-screen w-screen flex flex-col items-center py-10 absolute transform transition-transform duration-500 ease-in-out bg-zinc-100",
            {
              "translate-x-0": isOpenMenu,
              "translate-x-full border-l-[32px] border-purple-300": !isOpenMenu,
            }
          )}
        >
          {menuOptions.map((items: string, index: number) => (
            <Link
              key={index}
              href={items.trim().replace(/\s+/g, "-").toLocaleLowerCase()}
            >
              <li
                key={index}
                className={clsx("font-roboto", {
                  "hover:text-purple-light hover:bg-zinc-200 p-4 px-4 rounded-md transition-all ease-out duration-1000":
                    items !== "Doe Agora",
                })}
              >
                {items !== "Doe agora" ? (
                  items
                ) : (
                  <ButtonPrimarySmall btnType="primary" title={items} />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
