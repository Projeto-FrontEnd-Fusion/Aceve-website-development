"use client";
import { useState } from "react";
import { ToggleMenu, HeaderLogo, Navigation } from "./index";
import Link from "next/link";

const LinkClass = "text-[20px] text-gray-400 py-3 px-4 transition hover:bg-gray-100 rounded-lg active:bg-gray-300 focus:outline-grey-400";

export const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-4 px-4 tablet:px-8 laptop:px-[72px] m-auto border-b-2 border-b-primary relative">
      <div className="flex-shrink-0">
        <HeaderLogo />
      </div>
      <div className="flex-1 flex justify-center">
        <nav className="hidden mobileXLarger:flex items-center gap-6">
          <Link href="/" className={LinkClass}>
            Início
          </Link>
          <Link href="https://wa.me/c/5511982935150" className={LinkClass}>
            Loja
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="hidden mobileXLarger:block">
          <Link
            href="/quero-doar"
            className="px-5 py-4 bg-primary-600 text-white-normal
            text-lg active:bg-[#54277B] rounded-lg hover:bg-primary-700
            transition focus:outline-primary-400"
          >
            QUERO DOAR
          </Link>
        </div>

        <ToggleMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      </div>
    </header>
  );
}
