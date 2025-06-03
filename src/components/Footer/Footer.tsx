import { whoweareDetails } from "@/model/whoweare";
import { FaInstagram } from "react-icons/fa6";

interface ILogoFooter {
  logoSimios: string;
}



export const menuList = [
  "Quem somos",
  "Ajude-nos",
  "Brechó",
  "Política de Privacidade",
];

export const contactList = [
  {
    id: 1,
    order: [
      "Rua Ricardo Julio Ferraz, 357/367",
      "São Paulo, SP, 04814-120",
      "Brasil",
    ],
  },
  {
    id: 2,
    order: ["(11) 98293-5150"],
  },
  {
    id: 3,
    order: ["eliz_social@outlook.com"],
  },
];

const listInfo = [
  {
    id: 1,
    name: "Quem somos",
    link: "teste",
  },
  {
    id: 2,
    name: "Ajude-nos",
    link: "teste",
  },
  {
    id: 3,
    name: "Brechó",
    link: "teste",
  },
  {
    id: 4,
    name: "Política de privacidade",
    link: "teste",
  },
];

interface ItemsListProps {
  menuList?: string[];
  contactList?: string[];
  footerLogo: ILogoFooter;
  listInfo: string[];
  contactInfo: string[];
}

export const Footer = () => {
  return (
    <footer className="bg-purple-medium font-roboto ">
      <div
        className="flex flex-col items-center justify-evenly 
            text-white-normal py-6
            px-10
            mobileSmall:px-4
            mobileSmall:py-16  
            mobileSmall:flex-row
            mobileSmall:items-start
            "
      >
        <figure className="pb-8 mobileSmall:pb-0">
          <img
            src={whoweareDetails.whoweareImg1}
            alt="Logo"
            aria-label="Logo Violeta Eliz"
          />
        </figure>


        <div className="flex flex-col justify-center items-center mobileSmall:items-start mt-6 mobileSmall:mt-0">
          <h4 className="mb-4 font-bold text-base leading-5 text-white-normal">
            Contato
          </h4>
          <ul
            className="text-sm leading-6 flex flex-col items-center 
                    mobileSmall:items-start
                    "
          >
            {contactList.map((list) => {
              return (
                <li
                  key={list.id}
                  className="pb-2 mb-2 border-b-2 
                                border-purple-light mobileSmall:border-b-0 flex flex-col justify-center items-center mobileSmall:items-start"
                >
                  {list.order.length < 1
                    ? list.order.map((item) => {
                      return <p style={{ display: "block" }}>{item}</p>;
                    })
                    : list.order}
                </li>
              );
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


        <nav className="flex items-center gap-2 mt-6 mobileSmall:mt-0">
          <a
            href="https://www.instagram.com/violetaeliz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Instagram da ONG Violeta Eliz"
            className="flex items-center gap-2 text-white-normal hover:text-purple-300 transition-colors font-bold text-sm"
          >
            <span>Siga-nos no Instagram</span>
            <FaInstagram size={30} />
          </a>
        </nav>

      </div>

      <div
        className="w-full bg-purple-haiti text-white-normal 
            flex justify-center 
            items-center
            mobileSmall:justify-between 
            py-3 px-10
            mobileSmall:px-4
            mobileSmall:text-[8px]
            mobileXLarger:text-[10px]
            tablet:text-sm 
            text-base
            "
      >
        <div className="mobileSmall:flex hidden ">
          <p>
            © Associação Cultural e Educacional Violeta Eliz | Todos direitos
            reservados
          </p>
        </div>
        <div
          className="flex items-center 
                 mobileSmall:text-[8px]
                mobileXLarger:text-[10px]
                tablet:text-sm "
        >


        </div>
      </div>
    </footer>


  );
}

