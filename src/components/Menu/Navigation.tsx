import Link from "next/link";
import { ComponentProps, useEffect } from "react";

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
      mobileXLarger:top-20
      desktop:hidden ${
        isMenuOpen
          ? "left-1/2 -translate-x-1/2"
          : "left-1/2 translate-x-1/2 bg-purple-200 text-purple-700"
      }`}
    >
      
      <Link
        onClick={() => setisMenuOpen(false)}
        href="/"
        className="w-full h-16 flex justify-center items-center font-semibold text-gray-normal hover:text-[#823dc7]"
      >
        Início
      </Link>
      <Link
        onClick={() => setisMenuOpen(false)}
        href="https://wa.me/c/5511982935150"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-16 flex justify-center items-center font-semibold text-gray-normal hover:text-[#823dc7]"
      >
        Loja
      </Link>

      
      <Link
        onClick={() => setisMenuOpen(false)}
        href="/quero-doar"
        className="w-full h-16 flex justify-center items-center"
      >
        <button className="h-12 w-36 bg-[#823dc7] text-white-normal font-semibold rounded-lg hover:bg-[#6631c9] transition">
          QUERO DOAR
        </button>
      </Link>
    </nav>
  );
};
