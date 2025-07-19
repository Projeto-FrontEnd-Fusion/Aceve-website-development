'use client';

import Link from "next/link";
import Image from "next/image";
import { BackButton } from "@/components/BackButton/backButton";

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
      border-[#D6BDF5] px-6 font-semibold text-[#5F5764] 
      hover:bg-[#F2EBFC] transition duration-300 min-w-[248px] max-w-[346px] w-full ${className}`}
    >
      <Image src={icon} alt={`Ícone ${text}`} width={30} height={30} />
      <span className="text-[#54287B] text-[12px] font-medium">
        {text}
      </span>
    </Link>
  );
}

export default function Metodos() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FFF] mobileXLarger:bg-[#FAF6FE] items-center">
      <h1 className="sr-only">Métodos de Pagamento</h1>

      {/* Botão Voltar */}
      <div className="w-full px-4 mobileXLarger:px-[32px] mobileXLarger:w-[85%] desktop:w-[60%] mb-0">
        <div className="hidden mobileXLarger:block">
          <BackButton />
        </div>
        <div className="mobileXLarger:hidden">
          <BackButton />
        </div>
      </div>

      {/* Layout >= 640px */}
      <section
        className="hidden mobileXLarger:flex flex-col items-center justify-center w-full gap-6 bg-[#FFF]
        rounded-[16px] py-[24px] px-[32px] mobileXLarger:w-[85%] desktop:w-[60%] mt-0
        shadow-[1px_1px_4px_rgba(52,52,52,0.2)]"
      >
        <h2 className="text-[24px] text-[#663198] font-semibold text-center">
          Escolha sua forma de pagamento
        </h2>

        <div className="w-full max-w-[780px] flex flex-col items-start gap-2">
          <div className="flex justify-center gap-6 w-full">
            <BotaoPagamento
              href="/quero-doar/metodos/pix"
              icon="/pix-icon.svg"
              text="Pagamento via PIX"
            />
            <BotaoPagamento
              href="/quero-doar/metodos/paypal"
              icon="/paypal-icon.svg"
              text="Pagamento via PayPal"
            />
          </div>
          <div className="w-full flex justify-start mt-2 pl-[calc((100%-692px)/2)] max-w-[780px]">
            <p className="text-sm text-gray-600 text-left w-[346px]">
              Você será redirecionado para completar a doação
            </p>
          </div>
        </div>
      </section>

      {/* Layout < 640px */}
      <section className="flex flex-col mobileXLarger:hidden w-full items-center px-4 gap-4 mt-0 max-w-[360px] bg-[#FFF]">
        <h2 className="text-[14px] text-[#663198] font-semibold text-center">
          Escolha sua forma de pagamento
        </h2>

        <div className="flex flex-col items-start gap-4 w-full">
          <BotaoPagamento
            href="/quero-doar/metodos/pix"
            icon="/pix-icon.svg"
            text="Pagamento via PIX"
          />
          <BotaoPagamento
            href="/quero-doar/metodos/paypal"
            icon="/paypal-icon.svg"
            text="Pagamento via PayPal"
          />
          <p className="text-sm text-gray-600 text-left max-w-[346px] w-full mt-2">
            Você será redirecionado para completar a doação
          </p>
        </div>
      </section>
    </main>
  );
}
