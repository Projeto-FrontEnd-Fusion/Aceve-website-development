import { whoweareDetails } from "@/model/whoweare";
import { FaInstagram } from "react-icons/fa6";
import Logo from "@/public/Logo.png";
import Image from "next/image";
interface ILogoFooter {
  logoSimios: string;
}

export const menuList = [
  "Quem somos",
  "Ajude-nos",
  "Brechó",
  "Política de Privacidade",
];

const contactList = [
  {
    id: 1,
    order: [
      "Rua Ricardo Julio Ferraz, 357/367",
      "São Paulo, SP, 04814-120",
      "Brasil",
    ],
    href: "https://www.google.com/maps/place/R.+Ricardo+Júlio+Ferraz+-+Jardim+Maria+Rita,+São+Paulo+-+SP,+04814-120/@-23.7179721,-46.678417,3a,75y,85.62h,91.31t/data=!3m7!1e1!3m5!1sE5zfshillMLsY2BlBMtVzg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.3067196734278355%26panoid%3DE5zfshillMLsY2BlBMtVzg%26yaw%3D85.61906494275085!7i16384!8i8192!4m15!1m8!3m7!1s0x94ce4f784a8a4c29:0x3ff135405fa4d9f0!2sR.+Ricardo+Júlio+Ferraz+-+Jardim+Maria+Rita,+São+Paulo+-+SP,+04814-120!3b1!8m2!3d-23.7179756!4d-46.678417!16s%2Fg%2F1tjz4hch!3m5!1s0x94ce4f784a8a4c29:0x3ff135405fa4d9f0!8m2!3d-23.7179756!4d-46.678417!16s%2Fg%2F1tjz4hch?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    order: ["(11) 98293-5150"],
    href: "https://wa.me/5511982935150",
  },
  {
    id: 3,
    order: ["eliz_social@outlook.com"],
    href: "mailto:eliz_social@outlook.com",
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
    <footer className="bg-[#54287B] font-roboto py-8">
      <div
        className="flex flex-col sm:flex-row gap-10 items-center justify-evenly 
            text-white-normal
            px-10"
      >
        <figure>
          <Image src={Logo} alt="Logo violeta Eliz" className="w-32 xl:w-44" />
        </figure>

        <div className="flex flex-col justify-center gap-3">
          <ul className="text-sm leading-6 flex flex-col items-start xl:gap-4  gap-2 lg:flex-row  xl:items-center ">
            {contactList.map(({ id, order, href }) => (
              <>
                <li className="hover:underline" key={id}>
                  {order.map((item, index) => (
                    <a
                      className="block"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={href}
                      key={index}
                    >
                      {item}
                    </a>
                  ))}
                </li>
                <span className="hidden xl:block w-[1px] bg-[#A468E4] self-stretch rounded-lg" />
              </>
            ))}
          </ul>
        </div>

        <a
          href="https://www.instagram.com/violetaeliz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Siga-nos no Instagram da ONG Violeta Eliz"
          className="flex items-center flex-col gap-2 text-white-normal hover:text-purple-300 transition-colors font-bold text-sm"
        >
          <span>Siga-nos no Instagram</span>
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};
