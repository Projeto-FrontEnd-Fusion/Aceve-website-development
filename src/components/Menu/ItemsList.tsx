import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import clsx from "clsx";
import { useStore } from "zustand";
import { MenuPrimaryButton } from "./Button";
import type { ComponentProps } from "react";
import Link from "next/link";

interface logoSimiosProps {
  logoSimios?: string;
}

export const menuOptions = [
  "Inicio",
  "Quem Somos",
  "Contato",
  "Brechó",
  "Grupo Símios",
  "Doe agora",
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
      {menuOptions.map((items: string, index: number) => (
        <li
          key={index}
          className={clsx(
            "font-roboto laptop:text-[14px] laptop:text-center p-4 px-4 laptop:px-2 laptop:py-2 font-semibold",

            {
              "ordered-list hover:text-purple-light laptop:hover:bg-white rounded-md transition-all ease-out duration-1000 laptop:ordered-list":
                items !== menuOptions[5],
            }
          )}
        >
          <Link
            href={items
              .trim()
              .replace(/\s+/g, "-")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLocaleLowerCase()}
          >
            {items == menuOptions[3] || items == menuOptions[5] ? (
              <MenuPrimaryButton
                btnType={items == menuOptions[3] ? "secondary" : "primary"}
                title={items}
              />
            ) : (
              <span
                className={clsx("flex", {
                  "laptop:hidden": items === "Grupo Símios",
                })}
              >
                {items}
              </span>
            )}

            <figure
              className={clsx("hidden", {
                "laptop:flex": items === "Grupo Símios",
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
