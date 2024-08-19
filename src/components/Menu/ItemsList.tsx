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
        "h-screen w-screen flex flex-col items-center py-10 absolute transform transition-transform duration-500 ease-in-out",
        "lg:translate-x-0 bg-zinc-100 lg:h-20 lg:flex-row lg:relative lg:bg-white-normal",
        " xl:justify-end xl:text-[14px] lg:gap-4",
        {
          "translate-x-0": isOpenMenu === false,
          "translate-x-full": isOpenMenu === true,
        }
      )}
    >
      {menuOptions.map((items: string, index: number) => (
        <li
          key={index}
          className={clsx(
            "font-roboto lg:text-[14px] lg:text-center p-4 px-4 lg:px-2 lg:py-2",

            {
              "ordered-list hover:text-purple-light lg:hover:bg-white rounded-md transition-all ease-out duration-1000 lg:ordered-list":
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
                  "lg:hidden": items === "Grupo Símios",
                })}
              >
                {items}
              </span>
            )}

            <figure
              className={clsx("hidden", {
                "lg:flex": items === "Grupo Símios",
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
