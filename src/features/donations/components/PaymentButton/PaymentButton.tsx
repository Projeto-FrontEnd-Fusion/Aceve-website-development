import Link from "next/link";
import Image from "next/image";

export const PaymentButton = ({
  href,
  icon,
  text,
  className = "",
}: {
  href: string;
  icon: string;
  text: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 justify-center bg-[#FFF] h-[56px] rounded-[8px] border-2 
      border-primary-400 px-6 font-semibold
      hover:bg-primary-200 transition duration-300 w-full focus:outline-primary-800 active:bg-primary-400${className}`}
    >
      <Image src={icon} alt={`Ícone ${text}`} width={30} height={30} />
      <span className="text-primary-800 text-[0.75rem] font-medium">{text}</span>
    </Link>
  );
}
