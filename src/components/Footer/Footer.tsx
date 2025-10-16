import { FaInstagram } from "react-icons/fa6";
import Logo from "@/assets/logo-footer.png";
import Image from "next/image";
interface ILogoFooter {
  logoSimios: string;
}

const contactList = [
  {
    id: 1,
    content:
      "Rua Ricardo Julio Ferraz, 357/367\nSão Paulo, SP 04814-120 \nBrasil",
    href: "https://maps.app.goo.gl/U8jX5RuY7HN41tkF7",
  },
  {
    id: 2,
    content: "(11) 98293-5150",
    href: "https://wa.me/5511982935150",
  },
  {
    id: 3,
    content: "eliz_social@outlook.com",
    href: "mailto:eliz_social@outlook.com",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary-800 py-8">
      <div
        className="flex flex-col sm:flex-row gap-10 items-center justify-evenly 
            text-white-normal
            px-10"
      >
        <figure>
          <Image src={Logo} alt="Logo violeta Eliz" className="w-32 xl:w-44" />
        </figure>

        <div className="flex flex-col justify-center gap-3">
          <ul className="text-sm leading-6 flex flex-col items-start xl:gap-4  gap-2 xl:flex-row  xl:items-center ">
            {contactList.map((item, index) => (
              <>
                <li className="hover:underline" key={index}>
                  <a
                    className="block whitespace-pre-wrap"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.href}
                  >
                    {item.content}
                  </a>
                </li>
                <span className="hidden xl:block w-[1px] bg-primary-500 self-stretch rounded-lg last:hidden" />
              </>
            ))}
          </ul>
        </div>

        <a
          href="https://www.instagram.com/violetaeliz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Siga-nos no Instagram da ONG Violeta Eliz"
          className="flex items-center hover:underline flex-col gap-2 text-sm"
        >
          <span>Siga-nos no Instagram</span>
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};
