"use client";
import { ComponentProps } from "react";
import type React from "react";

import clsx from "clsx";
import { Logo } from "./Logo";
import { OngDescription } from "./ongname";
import { ToggleMenu } from "./ToggleMenu";
import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import { useStore } from "zustand";
import { ItemsList, menuOptions } from "./ItemsList";

interface ImenuHeader extends ComponentProps<"nav"> {
  logo?: string;
  logoSimios?: string;
  description?: string;
  icon?: React.ReactNode;
  options?: string[];
}

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
  const { isOpenMenu } = useStore(toggleMenuStore);

  return (
    <nav
      {...props}
      className="lg:flex lg:w-full lg:pr-8 lg:h-[80px] lg:pl-8 lg:items-center  lg:relative"
    >
      <header
        className={clsx(
          "flex py-4 items-center h-14",
          "mobileSmall:h-20 lg:flex-row lg:w-[60%]"
        )}
      >
        <Logo
          headerDetails={{
            logo: headerDetails.logo,
            description: headerDetails.description,
          }}
        />
        <OngDescription
          headerDetails={{ description: headerDetails.description }}
        />
        <ToggleMenu />
      </header>
      <ItemsList headerDetails={{ logoSimios: headerDetails.logoSimios }} />
    </nav>
  );
}
