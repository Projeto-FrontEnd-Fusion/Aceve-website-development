import { ComponentProps, useEffect } from "react";
import { GlobalLink } from "../GlobalLink/GlobalLink";
import { NavigationLink } from "./NavigationLink";

interface NavigationProps extends ComponentProps<'nav'> {
  isMenuOpen: boolean;
  setisMenuOpen: (isMenuOpen: boolean) => void;
}

export const Navigation = ({ isMenuOpen, setisMenuOpen }: NavigationProps) => {
  useEffect(() => {
    const closeMenuOnScroll = () => setisMenuOpen(false);
    window.addEventListener("scroll", closeMenuOnScroll);
    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, []);

  return (
    <nav
      aria-label="menu"
      tabIndex={-1}
      className={`z-50 border-t-2 border-y-purple-light/30 overflow-hidden w-screen h-screen pt-8 bg-white-normal 
      items-center justify-start top-14 
      fixed flex flex-col transform transition-all duration-500  
      mobileXLarger:top-16 gap-2
      desktop:hidden ${isMenuOpen
          ? "left-1/2 -translate-x-1/2"
          : "left-full bg-purple-200 text-purple-700"
        }`}
    >

      <NavigationLink
        href="/"
        onClick={() => setisMenuOpen(false)}
        className="text-[1.25rem] py-3 px-4">
        Início
      </NavigationLink>

      <NavigationLink
        href="/sobre-nos"
        onClick={() => setisMenuOpen(false)}
        className="text-[1.25rem] py-3 px-4">
        Sobre Nós
      </NavigationLink>

      <NavigationLink
        href="/o-que-fazemos"
        onClick={() => setisMenuOpen(false)}
        className="text-[1.25rem] py-3 px-4">
        O que fazemos
      </NavigationLink>

      <NavigationLink
        href="/faca-parte"
        onClick={() => setisMenuOpen(false)}
        className="text-[1.25rem] py-3 px-4">
        Faça parte
      </NavigationLink>


      <NavigationLink
        onClick={() => setisMenuOpen((false))}
        href="https://wa.me/c/5511982935150"
        className="text-[1.25rem] py-3 px-4">
        Loja
      </NavigationLink>

      <GlobalLink
        variant="primary"
        onClick={() => setisMenuOpen(false)}
        href="/quero-doar"
        className="px-5 py-4 "
      >
        QUERO DOAR
      </GlobalLink>
    </nav >
  );
};
