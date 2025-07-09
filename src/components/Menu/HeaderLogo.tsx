import { ComponentProps } from "react"
import Logo from '@/public/logo-header.png'
import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <div className="flex items-center w-20 mx-2 desktop:w-32">
      <Link href="/" aria-label="logo">
        <Image
          src={Logo}
          alt="logomarca Associação Cultural e Educacional Violeta Eliz"
          className="w-12 md:w-20"
          aria-label="logomarca"
        />
      </Link>
    </div>
  )
}