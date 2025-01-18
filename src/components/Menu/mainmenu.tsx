"use client";
import { mainMenuItems } from "@/config/menuItems";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToggleMenu , Navigation , HeaderLogo} from "./index";

export const TopBarNavigation = () => {
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);


  return (
    <section className="h-14 flex px-2 items-center justify-between relative
    mobileXLarger:h-20 mobileXLarger:px-8 desktop:justify-end desktop:px-8">

    <HeaderLogo />

    <Navigation 
     isMenuOpen={isMenuOpen} 
     setisMenuOpen={setisMenuOpen} 
    />

    <ToggleMenu  
      isMenuOpen={isMenuOpen} 
      setisMenuOpen={setisMenuOpen} 
      />
    </section>
  );
};
