import { mainMenuItems } from "@/config/menuItems";
import Link from "next/link";
import { ComponentProps, useEffect } from "react"

interface NavigationProps extends ComponentProps<'nav'> {
  isMenuOpen : boolean;
  setisMenuOpen : (isMenuOpen : boolean) => void;


}
export const Navigation = ({isMenuOpen, setisMenuOpen} : NavigationProps) =>{

  useEffect(() => {
    window.addEventListener("scroll", () => setisMenuOpen(false));
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
    return(
        <nav 
        aria-label="menu"
        tabIndex={-1}
          className={`border-t-2 border-y-purple-light/30 overflow-hidden w-screen h-screen pt-8 bg-white-normal 
              items-center justify-start top-14 
                  fixed z-50 flex flex-col transform transition-all duration-500  mobileXLarger:top-20 
                  desktop:border-2 desktop:h-20 desktop:relative
                  desktop:flex-row desktop:justify-end desktop:border-red-400 desktop:transform-none desktop:translate-x-0 desktop:left-0 desktop:top-0 desktop:pt-0 desktop:bg-none desktop:border-none desktop:w-[700px] desktop:ml-auto desktop:gap-4 ${
                    isMenuOpen
                      ? "left-1/2 -translate-x-1/2"
                      : "left-1/2 translate-x-[100%] bg-purple-200 text-purple-700"
                  }`}
        >
          {Array(mainMenuItems) && mainMenuItems?.map(({ itemName, itemLink }, index) => (
            <Link
              onClick={() => setisMenuOpen(false)}
              tabIndex={0}
              key={index}
              href={itemLink as string}
              className="w-full h-16 flex justify-center items-center 
              font-semibold text-gray-normal  hover:text-purple-light"
            >
             {index !== 3 && index !== 4 ? (
    itemName
  ) : index === 3 ? (
   <button className="h-12 w-36 text-purple-light ring-2 ring-purple-light/90 bg-white-normal hover:bg-purple-50 rounded-lg">{itemName}</button>
  ) : (
      <button className="h-12 w-36 bg-purple-light text-white-normal rounded-lg">{itemName}</button>
  )}
          
            </Link>
          ))}    
        </nav>
    )
}