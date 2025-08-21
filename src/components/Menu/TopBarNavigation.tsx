"use client";
import { useState } from "react";
import { ToggleMenu, HeaderLogo, Navigation } from "./index";
import Link from "next/link";
import { GlobalLink } from "../GlobalLink/GlobalLink";

const LinkClass = "";

export const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const links = [
    {
      label: "Início",
      href: "/"
    },
    {
      label: 'Loja',
      href: "https://wa.me/c/5511982935150"
    },
  ]

  return (
    <header className="flex items-center justify-between py-4 px-4 tablet:px-8 laptop:px-[4.5rem] m-auto border-b-2 border-b-primary relative">
      <div className="flex-shrink-0">
        <HeaderLogo />
      </div>
      <div className="flex mx-auto">
        <nav className="hidden mobileXLarger:flex">
          <ul className="flex items-center gap-6">
            <li>
              <GlobalLink
                variant="text"
                href="/"
                className="text-[1.25rem] py-3 px-4">
                Início
              </GlobalLink>
            </li>

            <li>
              <GlobalLink
                variant="text"
                href="https://wa.me/c/5511982935150"
                className="text-[1.25rem] py-3 px-4">
                Loja
              </GlobalLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="hidden mobileXLarger:block">
          <GlobalLink
            variant="primary"
            href="/quero-doar"
            className="px-5 py-4 text-lg"
          >
            QUERO DOAR
          </GlobalLink>
        </div>

        <ToggleMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      </div>
    </header>
  );
}
