import { whoweareDetails } from "@/model/whoweare";
import clsx from "clsx";
import Link from "next/link";
import { FaFacebookF, FaHeart, FaInstagram, FaXTwitter, } from "react-icons/fa6";


interface ILogoFooter {
    logoSimios: string;
}

const FooterDetails: ILogoFooter = {
    logoSimios:
        "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/8487ce9f-664c-4a4d-a8de-287508c9996d.png",
};

export const menuList = [
    "Quem somos",
    "Ajude-nos",
    "Brechó",
    "Política de Privacidade"
];

export const contactList = [
    {
        id: 1,
        order: [
            "Rua Ricardo Julio Ferraz, 357/367",
            "São Paulo, SP, 04814-120",
            "Brasil"
        ],
    },
    {
        id: 2,
        order: ["(11) 98293-5150"]
    },
    {

        id: 3,
        order: ["eliz_social@outlook.com"]
    }
]

const listInfo = [
    {
        id: 1,
        name: "Quem somos",
        link: "teste"
    },
    {
        id: 2,
        name: "Ajude-nos",
        link: "teste"
    },
    {
        id: 3,
        name: "Brechó",
        link: "teste"
    },
    {
        id: 4,
        name: "Política de privacidade",
        link: "teste"
    }
]

interface ItemsListProps {
    menuList?: string[];
    contactList?: string[];
    footerLogo: ILogoFooter;
    listInfo: string[];
    contactInfo: string[];
}



export const Footer = ({
    footerLogo,
    ...props
}: ItemsListProps) => {

    return (
        <footer className="bg-purple-medium font-roboto ">
            <div className="flex flex-col items-center justify-evenly 
            text-white-normal py-6
            px-10
            mobileSmall:px-4
            mobileSmall:py-16  
            mobileSmall:flex-row
            mobileSmall:items-start
            ">
                <figure className="pb-8 mobileSmall:pb-0">
                    <img src={whoweareDetails.whoweareImg1} alt="Logo" aria-label="Logo Violeta Eliz" />
                </figure>

                <div className="flex flex-col justify-center items-center mobileSmall:items-start mx-1">
                    <h4 className="mb-4 font-bold text-base leading-5 text-white-normal">Menu</h4>

                    <ul className="text-sm leading-6 
                    flex flex-col items-center 
                    mobileSmall:items-start                    
                    ">

                        {listInfo.map((list) => {
                            return (
                                <li key={list.id} className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 border-purple-light">
                                    <Link href={`/#${list.link}`} aria-label="Quem somos">
                                        {list.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="flex flex-col justify-center items-center mobileSmall:items-start mt-6 mobileSmall:mt-0">
                    <h4 className="mb-4 font-bold text-base leading-5 text-white-normal">
                        Contato
                    </h4>
                    <ul
                        {...props}
                        className="text-sm leading-6 flex flex-col items-center 
                    mobileSmall:items-start
                    ">
                        {contactList.map((list) => {
                            return (
                                <li key={list.id} className="pb-2 mb-2 border-b-2 
                                border-purple-light mobileSmall:border-b-0 flex flex-col justify-center items-center mobileSmall:items-start">

                                    {list.order.length < 1 ?
                                        list.order.map(item => {
                                            return <p style={{display:"block"}} >{item}</p>
                                        })
                                        :
                                        list.order}
                                </li>
                            )
                        })}

                        {/* <li className="pb-2 mb-2 border-b-2 
                        border-purple-light mobileSmall:border-b-0 flex flex-col justify-center items-center mobileSmall:items-start">
                            <p>Rua Ricardo Julio Ferraz, 357/367</p>
                            <p>São Paulo, SP, 04814-120</p>
                            <p>Brasil</p>
                        </li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 border-purple-light">(11) 98293-5150</li>
                        <li className="pb-2 mb-2 border-b-2 mobileSmall:border-b-0 border-purple-light">eliz_social@outlook.com</li> */}
                    </ul>
                </div>

                <nav className="flex flex-col gap-4 items-center mt-6 mobileSmall:mt-0 ">

                    <h4 className="text-white-normal font-bold mobileSmall:text-base text-[12px]">Siga-nos nas redes sociais</h4>

                    <ul className="flex gap-8">
                        <li>
                            <a href="" target="_blank" aria-label="Logo Facebook">
                                <FaFacebookF size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" aria-label="Logo Tweeter / X">
                                <FaXTwitter size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" aria-label="Logo Instagram">
                                <FaInstagram size={32} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="w-full bg-purple-haiti text-white-normal 
            flex justify-center 
            items-center
            mobileSmall:justify-between 
            py-3 px-10
            mobileSmall:px-4
            mobileSmall:text-[8px]
            mobileXLarger:text-[10px]
            tablet:text-sm 
            text-base
            ">
                <div className="mobileSmall:flex hidden ">
                    <p>© Associação Cultural e Educacional Violeta Eliz | Todos direitos reservados</p>
                </div>
                <div className="flex items-center 
                 mobileSmall:text-[8px]
                mobileXLarger:text-[10px]
                tablet:text-sm ">
                    <p className="flex items-center">
                        Feito com <FaHeart color="red" className="mx-2" /> pelo <span className="text-yellow-normal underline font-bold mx-2">Grupo Símios</span>
                    </p>
                    <figure >
                        <img src={FooterDetails.logoSimios} alt="logo" className="w-8 mobileSmall:w-5" />
                    </figure>
                </div>
            </div>
        </footer>
    )
}