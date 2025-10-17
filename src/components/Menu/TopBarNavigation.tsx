"use client";
import { useState } from "react";
import { ToggleMenu, HeaderLogo, Navigation } from "./index";
import { GlobalLink } from "../GlobalLink/GlobalLink";
import { NavigationLink } from "./NavigationLink";


export const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const linkClasses = "sm:text-sm laptop:text-xl py-3 px-2 tablet:px-4 text-center"

  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-4 tablet:px-8 laptop:px-[4.5rem] m-auto border-b-2 border-b-primary relative text-">
      <div className="flex-shrink-0">
        <HeaderLogo />
      </div>
      <div className="flex mx-auto">
        <nav className="hidden mobileXLarger:flex">
          <ul className="flex items-center gap-3 max-sm:gap-6 md:mr-1">
            <li>
              <NavigationLink href="/" className={linkClasses} />
            </li>
            <li>
              <NavigationLink href="/sobre-nos" className={linkClasses}>
                Sobre Nós
              </NavigationLink>
            </li>

            <li>
              <NavigationLink
                href="/o-que-fazemos"
                className={linkClasses}>
                O que fazemos
              </NavigationLink>
            </li>

            <li>
              <NavigationLink
                href="/faca-parte"
                className={linkClasses}>
                Faça parte
              </NavigationLink>
            </li>

            <li>
              <NavigationLink
                href="https://wa.me/c/5511982935150"
                className={linkClasses}>
                Loja
              </NavigationLink>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="hidden mobileXLarger:block">
          <GlobalLink
            variant="primary"
            href="/quero-doar"
            className={linkClasses}
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
