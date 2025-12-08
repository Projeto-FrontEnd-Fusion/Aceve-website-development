'use client'
import { useRouter } from "next/navigation";
import { PaypalButton } from "@/features/donations/components/PaypalButton/PaypalButton"
import { useDonationGuard } from "@/features/donations/hooks/useDonationGuard";
import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { useState } from "react";

export default function Page() {
  useDonationGuard();
  const router = useRouter()
  const [paypalError, setPaypalError] = useState(false)

  const cleanPaypalError = () => {
    setPaypalError(false)
  }


  return (
    <main className="flex flex-col gap-2 tablet:gap-0 min-h-screen bg-[#FFF] py-4 px-4 tablet:py-4 tablet:px-[4.5rem] tablet:bg-primary-100">
      <h1 className="sr-only">Métodos de Pagamento</h1>

      <GlobalButton
        variant="text-grey-300"
        onClick={() => router.back()}
        className="w-fit p-2 gap-4 font-semibold text-[0.75rem] tablet:text-[1.25rem] tablet:px-5 tablet:py-4"
      >
        <span className="text-[0.75rem] tablet:text-[1.25rem]">&lt;</span>
        Voltar
      </GlobalButton>
      <section
        className="flex flex-col items-center w-full mt-0 gap-4 mobileXLarger:gap-6
        px-0 tablet:px-8 py-6
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
            <PaypalButton cleanPaypalError={cleanPaypalError}
              onErrorChange={setPaypalError} />
            <p className="ml-2 text-[0.625rem] leading-4 tablet:leading-5">
              Você será redirecionado para o PayPal para finalizar a doação
            </p>
            {paypalError && <p className="ml-2 text-[0.8rem] text-red-600">Erro ao realizar a requisição. Tente novamente mais tarde</p>}
          </div>

          <GlobalLink
            onClick={cleanPaypalError}
            variant="outlined-primary-400"
            href="/quero-doar/metodos/pix"
            className="px-6 w-full h-[56px] gap-3 "
          >
            <img src="/pix-icon.svg" width={30} height={30} />
            <span className="text-primary-800 text-[0.75rem]">Pagamento via PIX</span>
          </GlobalLink>
        </div>
      </section>
    </main>
  );
}
