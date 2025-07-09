"use client";
import { useState } from "react";
import { ToggleMenu, HeaderLogo, Navigation } from "./index";
import Link from "next/link";

export const TopBarNavigation = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <section className="h-14 flex px-2 items-center justify-between relative mobileXLarger:h-20 mobileXLarger:px-8 desktop:justify-between desktop:px-8">
      <HeaderLogo />

      
      <nav className="hidden desktop:flex gap-6 items-center justify-center flex-1">
        <Link
          href="/"
          className="font-semibold text-gray-normal hover:text-[#823dc7] transition"
        >
          Início
        </Link>
        <Link
          href="https://wa.me/c/5511982935150"
          className="font-semibold text-gray-normal hover:text-[#823dc7] transition"
        >
          Loja
        </Link>
      </nav>

      
      <div className="hidden desktop:block">
        <Link href="/quero-doar">
          <button className="h-12 px-6 bg-[#823dc7] text-white-normal rounded-lg hover:bg-[#6631c9] transition">
            QUERO DOAR
          </button>
        </Link>
      </div>

     
      <ToggleMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />

      <Navigation isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
    </section>
  );
};
