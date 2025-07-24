'use client'

import Link from "next/link";
import Image from "next/image";
import { BackButton } from "@/components/BackButton/backButton";
import { PaypalButton } from "@/components/PaypalButton/PaypalButton";
import { useDonationGuard } from "@/hooks/useDonationGuard";

function BotaoPagamento({
  href,
  icon,
  text,
  className = "",
}: {
  href: string;
  icon: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 justify-center bg-[#FFF] h-[56px] rounded-[8px] border-2 
      border-[#D6BDF5] px-6 font-semibold
      hover:bg-[#F2EBFC] transition duration-300 w-full focus:outline-[#54287B] active:bg-[#D6BDF5]${className}`}
    >
      <Image src={icon} alt={`Ícone ${text}`} width={30} height={30} />
      <span className="text-[#54287B] text-[12px] font-medium">{text}</span>
    </Link>
  );
}
export default function Page() {
  useDonationGuard();
  return (
    <main className="flex flex-col gap-2 tablet:gap-0 min-h-screen bg-[#FFF] p-4 tablet:py-4 tablet:px-[4.5rem] tablet:bg-[#FAF6FE]">
      <h1 className="sr-only">Métodos de Pagamento</h1>

      <BackButton />
      <section
        className="flex flex-col items-center w-full mt-0 gap-4 mobileXLarger:gap-6
        px-4 mobileXLarger:px-[32px] py-[24px]
        self-center
        laptop:w-[80%]
        desktop:w-[70%]
        bg-[#FFF] rounded-[16px] tablet:shadow-[1px_1px_4px_rgba(52,52,52,0.2)]"
      >
        <h2 className="text-[14px] tablet:text-[24px] text-[#663198] font-semibold text-center">
          Escolha sua forma de pagamento
        </h2>

        <div className="w-full flex flex-col-reverse items-center justify-around tablet:flex-row gap-4 tablet:items-start">
          <div className="flex flex-col justify-start text-sm text-gray-600 text-left w-full">
            <PaypalButton />
            <p className="ml-2 text-[10px]">
              Você será redirecionado para o PayPal para finalizar a doação
            </p>
          </div>
          <BotaoPagamento
            href="/quero-doar/metodos/pix"
            icon="/pix-icon.svg"
            text="Pagamento via PIX"
          />
        </div>
      </section>
    </main>
  );
}
