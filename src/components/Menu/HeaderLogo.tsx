import { ComponentProps } from "react"

export const HeaderLogo = ({...props} : ComponentProps<'header'>) =>{
    return(
        <header {...props} className="flex items-center">
        <div className={`w-20 mx-2 desktop:w-32`}>
          <img
            src={`https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/8ec4791d-e61a-4e48-abb1-bcc54d343bbd.png`}
            alt="logomarca Associação Cultural e Educacional Violeta Eliz"
            className="w-full"
            aria-label="logomarca"
          />
        </div>
        <h1 className="text-[.6rem] w-32 px-1 leading-none text-purple-light
         font-semibold border-l-2 border-purple-light/20 
         mobileXLarger:text-[1em]
         mobileXLarger:w-56 mobileXLarger:mx-4:
         ">
          Associação Cultural e Educacional Violeta Eliz
        </h1>
      </header>
    )
}