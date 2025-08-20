import Link from "next/link";
import { ComponentProps, useEffect } from "react";
import { GlobalLink } from "../GlobalLink/GlobalLink";

interface NavigationProps extends ComponentProps<'nav'> {
  isMenuOpen: boolean;
  setisMenuOpen: (isMenuOpen: boolean) => void;
}

const LinkClass = "text-[1.25rem] text-gray-400 py-3 px-4 transition hover:bg-gray-100 rounded-lg active:bg-gray-300 focus:outline-grey-400";


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
          : "left-1/2 translate-x-1/2 bg-purple-200 text-purple-700"
        }`}
    >

      <GlobalLink
        variant="text"
        href="/"
        className="text-[1.25rem] py-3 px-4">
        Início
      </GlobalLink>

      <GlobalLink
        variant="text"
        href="/o-que-fazemos"
        className="text-[1.25rem] py-3 px-4">
        O que fazemos
      </GlobalLink>
      
      <GlobalLink
        variant="text"
        href="https://wa.me/c/5511982935150"
        className="text-[1.25rem] py-3 px-4">
        Loja
      </GlobalLink>

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
