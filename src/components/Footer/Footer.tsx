import { whoweareDetails } from "@/model/whoweare";
import clsx from "clsx";
import Link from "next/link";
import { FaFacebookF, FaHeart, FaInstagram, FaXTwitter, } from "react-icons/fa6";


export const Footer = () => {
    return (
        <footer className="bg-purple-medium font-roboto ">
            <div className="flex flex-col items-center justify-evenly 
            text-white-normal py-6
            mobileSmall:py-16  
            mobileSmall:flex-row
            mobileSmall:items-start
            ">
                <figure className="pb-8 mobileSmall:pb-0">
                    <img src={whoweareDetails.whoweareImg1} alt="" />
                </figure>

                <div className="flex flex-col justify-center items-center mobileSmall:items-start mx-1">
                    <h4 className="mb-4 font-bold text-base leading-5 text-white-normal">Menu</h4>

                    <ul className="text-sm leading-6 
                    flex flex-col items-center 
                    mobileSmall:items-start                    
                    ">
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 mobileSmall:border-purple-light">
                            <Link href={"/test"}>
                                Quem somos
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 mobileSmall:border-purple-light">
                            <Link href={"/test"}>
                                Ajude-nos
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 mobileSmall:border-purple-light">
                            <Link href={"/test"}>
                                Brechó
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 mobileSmall:border-purple-light">
                            <Link href={"/test"}>
                                Política de privacidade
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center items-center mobileSmall:items-start mt-6 mobileSmall:mt-0">
                    <h4 className="mb-4 font-bold text-base leading-5 text-white-normal">
                        Contato
                    </h4>
                    <ul className="text-sm leading-6 flex flex-col items-center 
                    mobileSmall:items-start
                    ">

                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-purple-light mobileSmall:border-b-0 flex flex-col justify-center items-center mobileSmall:items-start">
                            <p>Rua Ricardo Julio Ferraz, 357/367</p>
                            <p>São Paulo, SP, 04814-120</p>
                            <p>Brasil</p>
                        </li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 border-purple-light">(11) 98293-5150</li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 mobileSmall:border-purple-light">eliz_social@outlook.com</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 items-center mt-6 mobileSmall:mt-0 ">
                    <h4 className="text-white-normal font-bold">Siga-nos</h4>
                    <ul className="flex gap-8">
                        <li>
                            <a href="" target="_blank">
                                <FaFacebookF size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <FaXTwitter size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <FaInstagram size={32} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="w-full bg-purple-haiti text-white-normal 
            flex justify-center 
            mobileSmall:justify-between 
            py-3 px-10
            mobileSmall:text-[8px]
            mobileXLarger:text-[10px]
            tablet:text-sm 
            text-base
            ">
                <div className="mobileSmall:flex hidden">
                    <p>© Associação Cultural e Educacional Violeta Eliz | Todos direitos reservados</p>
                </div>
                <div className="flex items-center">
                    <p className="flex items-center">
                        Feito com <FaHeart color="red" className="mx-2" /> pelo <strong className="text-yellow-normal mx-2"><u>Grupo Símios</u></strong> <img src={"s"} alt="" />
                    </p>
                    <figure>
                        {/* <img src="" alt="as" /> */}
                        <FaFacebookF size={12} />
                    </figure>
                </div>
            </div>
        </footer>
    )
}