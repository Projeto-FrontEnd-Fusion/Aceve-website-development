'use client'

import { BackButton } from "@/features/donations/components/BackButton/BackButton";
import { PaypalButton } from "@/features/donations/components/PaypalButton/PaypalButton"
import { PaymentButton } from "@/features/donations/components/PaymentButton/PaymentButton";
import { useDonationGuard } from "@/features/donations/hooks/useDonationGuard";

export default function Page() {
  useDonationGuard();
  return (
    <main className="flex flex-col gap-2 tablet:gap-0 min-h-screen bg-[#FFF] p-4 tablet:py-4 tablet:px-[4.5rem] tablet:bg-primary-100">
      <h1 className="sr-only">Métodos de Pagamento</h1>

      <BackButton />
      <section
        className="flex flex-col items-center w-full mt-0 gap-4 mobileXLarger:gap-6
        px-4 mobileXLarger:px-8 py-6
        self-center
        laptop:w-[80%]
        desktop:w-[70%]
        bg-[#FFF] rounded-[16px] tablet:shadow-[1px_1px_4px_rgba(52,52,52,0.2)]"
      >
        <h2 className="text-[0.875rem] tablet:text-[1.5rem] text-primary-700 font-semibold text-center">
          Escolha sua forma de pagamento
        </h2>

        <div className="w-full flex flex-col-reverse items-center justify-around tablet:flex-row gap-4 tablet:items-start">
          <div className="flex flex-col justify-start text-sm text-gray-600 text-left w-full">
            <PaypalButton />
            <p className="ml-2 text-[0.625rem]">
              Você será redirecionado para o PayPal para finalizar a doação
            </p>
          </div>
          <PaymentButton
            href="/quero-doar/metodos/pix"
            icon="/pix-icon.svg"
            text="Pagamento via PIX"
          />
        </div>
      </section>
    </main>
  );
}
