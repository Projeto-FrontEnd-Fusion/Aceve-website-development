import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

interface HeaderDetails {
  logo?: string;
  description?: string;
}

interface ILogoProps extends ComponentProps<"figure"> {
  headerDetails: HeaderDetails;
}

export const Logo = ({
  headerDetails: { logo, description },
  ...props
}: ILogoProps) => {
  // Verifica se `description` e `logo` são fornecidos
  if (!logo || !description) {
    console.error("Logo and description must be provided.");
    return null;
  }

  return (
    <Link href={"/"}>
      <figure
        {...props}
        className="border-r-2 border-gray-stroker ml-4"
        role="img"
        aria-labelledby="logo-do-site"
      >
        <img
          src={logo}
          alt={`Logo da ONG: ${description}`}
          className={clsx("w-20 pr-2", "mobileSmall:w-24", "lg:w-36")}
        />
        <figcaption className="sr-only">
          Esse é o logo da ONG Violeta Eliz
        </figcaption>
      </figure>
    </Link>
  );
};
