import Link from "next/link";
import type { ComponentProps } from "react";
import type React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface ImenuHeader extends ComponentProps<"nav"> {
  logo?: string;
  description?: string;
  icon?: React.ReactNode;
  options?: string[];
}
const menuOptions: string[] = [
  "Página Inicial",
  "Quem Somos",
  "Contato",
  "Nosso Brechó",
  "Grupo Símios",
  "Doe agora",
];

const menuDetails: ImenuHeader = {
  logo: "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/8ec4791d-e61a-4e48-abb1-bcc54d343bbd.png",
  description: "Associação Cultural e Educacional Violeta Eliz",
  icon: <GiHamburgerMenu />,
  options: menuOptions,
};

export default function Mainmenu({
  logo,
  description,
  icon,
  ...props
}: ImenuHeader) {
  return (
    <>
      <nav {...props}>
        <header className="flex">
          <figure>
            <img src={menuDetails.logo} alt={menuDetails.description} />
            <figcaption className="sr-only">
              Esse é o logo da ong Violeta Eliz
            </figcaption>
          </figure>
          <h1 className="text-[10px] leading-none w-[100px]">
            {menuDetails.description}
          </h1>
          <figure>{menuDetails.icon}</figure>
        </header>

        <ul className="hidden">
          {menuOptions.map((items, index) => (
            <Link href={items.trim().replace(/\s+/g, "-").toLocaleLowerCase()}>
              <li key={index}>{items}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
