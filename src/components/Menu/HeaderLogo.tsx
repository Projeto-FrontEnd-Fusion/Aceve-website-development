import { ComponentProps } from "react"
import logo from '@/public/logo.png'
import Image from "next/image";

export const HeaderLogo = ({...props} : ComponentProps<'header'>) =>{
    return(
        <header {...props} className="flex items-center">
        <div className={`w-20 mx-2 desktop:w-32`}>
          <Image
            src={logo}
            alt="logomarca Associação Cultural e Educacional Violeta Eliz"
            className="w-12 md:w-20"
            aria-label="logomarca"
          />
        </div>
      </header>
    )
}