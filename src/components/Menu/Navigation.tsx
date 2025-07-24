import Link from "next/link";
import { ComponentProps, useEffect } from "react";

interface NavigationProps extends ComponentProps<'nav'> {
  isMenuOpen: boolean;
  setisMenuOpen: (isMenuOpen: boolean) => void;
}

const LinkClass = "text-[20px] text-gray-400 py-3 px-4 transition hover:bg-gray-100 rounded-lg active:bg-gray-300 focus:outline-[#CBCBCB]";


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

      <Link
        onClick={() => setisMenuOpen(false)}
        href="/"
        className={LinkClass}
      >
        Início
      </Link>

      <Link
        onClick={() => setisMenuOpen(false)}
        href="https://wa.me/c/5511982935150"
        target="_blank"
        rel="noopener noreferrer"
        className={LinkClass}
      >
        Loja
      </Link>


      <Link
        onClick={() => setisMenuOpen(false)}
        href="/quero-doar"
        className="h-16 flex justify-center items-center px-5 py-4
        bg-[#823dc7] text-white-normal text-lg active:bg-[#54277B]
        rounded-lg hover:bg-[#663198] transition ease-in-out focus:outline-[#D6BDF5]"
      >
        QUERO DOAR
      </Link>
    </nav>
  );
};
