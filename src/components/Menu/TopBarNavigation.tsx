"use client";
import { useState } from "react";
import { ToggleMenu, HeaderLogo, Navigation } from "./index";
import Link from "next/link";

const LinkClass = "font-semibold text-[20px] text-gray-400 py-3 px-4 transition hover:bg-gray-100 rounded-lg active:bg-gray-300";

export const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <header className="flex py-9 px-2 m-auto items-center justify-between relative mobileXLarger:py-10 mobileXLarger:px-8 desktop:justify-between desktop:px-8 border-b-2 berder-b-primary">
      <HeaderLogo />

      
      <nav className="hidden desktop:flex gap-6 items-center justify-center flex-1">
        <Link
          href="/"
          className={LinkClass}
        >
          Início
        </Link>
 
        <Link
          href="/"
        className={LinkClass}
        >
          Sobre nós
        </Link>

        <Link
          href="/"
          className={LinkClass}
        >
          O que fazemos
        </Link>

        <Link
          href="/"
          className={LinkClass}
                  >
          Faça parte
        </Link>

        <Link
          href="https://wa.me/c/5511982935150"
          className={LinkClass}
        >
          Loja
        </Link>
      </nav>

      
      <div className="hidden desktop:block">
        <Link href="/doe-agora">
          <button className="px-5 py-4 bg-[#823dc7] text-white-normal font-semibold text-[18px] rounded-lg hover:bg-[#6631c9] transition">
            QUERO DOAR
          </button>
        </Link>
      </div>

     
      <ToggleMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />

      <Navigation isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
    </header>
  );
};
