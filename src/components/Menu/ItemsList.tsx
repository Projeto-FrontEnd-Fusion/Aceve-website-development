import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import clsx from "clsx";
import { useStore } from "zustand";
import { MenuPrimaryButton } from "./Button";
import type { ComponentProps } from "react";
import Link from "next/link";
import { link } from "fs";

interface logoSimiosProps {
  logoSimios?: string;
}
export const menuOptions = [
  { name: "Inicio", link: "/" },
  { name: "Quem Somos", link: "/quem-somos" },
  { name: "Contato", link: "/fale-conosco" },
  { name: "Brécho", link: "/brecho" },
  { name: "Grupo Símios", link: "/simios" },
  { name: "Doe Agora", link: "/doe-agora" },
];

interface ItemsListProps extends ComponentProps<"ul"> {
  menuOptions?: string[];
  headerDetails: logoSimiosProps;
}

export const ItemsList = ({
  headerDetails: { logoSimios },
  ...props
}: ItemsListProps) => {
  const { isOpenMenu } = useStore(toggleMenuStore);

  return (
    <ul
      {...props}
      className={clsx(
        "main-menu-mobile bg-white-normal h-screen w-screen flex flex-col items-center py-10 absolute transition-all duration-500 ease-in-out",
        "laptop:translate-x-0 laptop:h-20 laptop:flex-row laptop:relative laptop:bg-white-normal",
        " xl:justify-end xl:text-[14px] laptop:gap-4",
        {
          "translate-x-0": isOpenMenu === false,
          "translate-x-full sr-only mobileSmall:flex": isOpenMenu === true,
        }
      )}
    >
      {menuOptions.map(({ name, link }, index) => (
        <li
          key={index}
          className={clsx(
            "font-roboto laptop:text-[14px] laptop:text-center p-4 px-4 laptop:px-2 laptop:py-2 font-semibold",

            {
              "ordered-list hover:text-purple-light laptop:hover:bg-white rounded-md transition-all ease-out duration-1000 laptop:ordered-list":
                name !== "Doe Agora",
            }
          )}
        >
          <Link href={link}>
            {link == "Brechó" || link == "Doe Agora" ? (
              <MenuPrimaryButton
                btnType={link == "Brechó" ? "secondary" : "primary"}
                title={name}
              />
            ) : (
              <span
                className={clsx("flex", {
                  "laptop:hidden": name === "Grupo Símios",
                })}
              >
                {name}
              </span>
            )}

            <figure
              className={clsx("hidden", {
                "laptop:flex": name === "Grupo Símios",
              })}
            >
              <img src={logoSimios} alt="logo" />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
};
