"use client";
import { useState } from "react";
import { ToggleMenu, HeaderLogo, Navigation } from "./index";
import Link from "next/link";

const LinkClass = "text-[20px] text-gray-400 py-3 px-4 transition hover:bg-gray-100 rounded-lg active:bg-gray-300";

export const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <header className="flex py-4 px-[72px] m-auto items-center justify-between relative desktop:justify-between border-b-2 berder-b-primary">
      <HeaderLogo />

      
      <nav className="hidden desktop:flex items-center justify-center">
        <Link
          href="/"
          className={LinkClass}
        >
          Início
        </Link>

        <Link
          href="https://wa.me/c/5511982935150"
          className={LinkClass}
        >
          Loja
        </Link>
      </nav>

      
      <div className="hidden desktop:block">
        <Link href="/quero-doar">
          <button className="px-5 py-4 bg-[#823dc7] text-white-normal font-semibold text-lg active:bg-[#663198] rounded-lg hover:bg-[#663198] transition">
            QUERO DOAR
          </button>
        </Link>
      </div>

     
      <ToggleMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />

      <Navigation isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
    </header>
  );
};
