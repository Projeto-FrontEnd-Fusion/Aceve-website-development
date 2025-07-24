import { ComponentProps } from "react";
import Logo from "@/assets/logo-header.png";
import Image from "next/image";

export const HeaderLogo = ({ ...props }: ComponentProps<"header">) => {
  return (
    <Image
      src={Logo}
      alt="logomarca Associação Cultural e Educacional Violeta Eliz"
      className="h-11 mobileXLarger:h-8 laptop:h-14 w-auto object-contain"
      priority
    />
  );
};
