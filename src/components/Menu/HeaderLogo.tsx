import { ComponentProps } from "react";
import Logo from "@/public/logo-header.png";
import Image from "next/image";

export const HeaderLogo = ({ ...props }: ComponentProps<"header">) => {
  return (
    <header {...props} className="flex items-center">
      <div className="mx-2">
        <Image
          src={Logo}
          alt="logomarca Associação Cultural e Educacional Violeta Eliz"
          className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto object-contain"
          priority
        />
      </div>
    </header>
  );
};
