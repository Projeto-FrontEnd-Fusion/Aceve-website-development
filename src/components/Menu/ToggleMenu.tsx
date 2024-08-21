import { toggleMenuStore } from "@/zustand-store/togglemenu.store";
import clsx from "clsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useStore } from "zustand";

export const ToggleMenu = () => {
  const { isOpenMenu, setisOpenMenu } = useStore(toggleMenuStore);

  return (
    <nav
      className={clsx(
        "flex items-center justify-end flex-1 mr-6 cursor-pointer",
        "md:mr-4",
        "laptop:hidden"
      )}
      onClick={setisOpenMenu}
    >
      {!isOpenMenu ? (
        <IoClose size={32} />
      ) : (
        <GiHamburgerMenu className="text-[24px] md:text-[32px]" />
      )}
    </nav>
  );
};
