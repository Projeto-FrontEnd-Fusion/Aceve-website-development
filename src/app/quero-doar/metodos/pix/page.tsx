'use client'
import { usePixCode } from "@/features/donations/hooks/usePixCode";
import { BackButton } from "@/features/donations/components/BackButton/BackButton";
import { useDonationGuard } from "@/features/donations/hooks/useDonationGuard";
import { PixQRCode } from "@/features/donations/components/PixQRCode/PixQRCode";
import { PixBRCode } from "@/features/donations/components/PixBRCode/PixBRCode";

export default function Page() {
  useDonationGuard();

  const {
    qrCodeBase64,
    brCode,
    loading,
    copied,
    handleCopy,
  } = usePixCode();

  return (
    <main className="bg-grey-100 p-4 tablet:bg-primary-100 min-h-screen flex flex-col items-center justify-start tablet:px-8 desktop:px-[4.5rem] sm:py-12 bg-white">
      <div className="self-start">
        <BackButton />
      </div>

      <section className="w-full max-w-[731px] desktop:w-[70%] laptop:w-[80%] tablet:bg-grey-100 rounded-none sm:rounded-2xl shadow-none sm:shadow-md sm:p-8 flex flex-col gap-6 sm:gap-10">
        <Heading />
        <Instructions />
        <PixQRCode loading={loading} qrCodeBase64={qrCodeBase64} />
        <PixBRCode
          brCode={brCode}
          copied={copied}
          onCopy={handleCopy}
        />
      </section>
    </main>
  );
}



function Heading() {
  return (
    <h1 className="text-xl sm:text-2xl font-semibold text-primary-700 tracking-[-0.01em] text-center font-inter">
      Pagamento via PIX
    </h1>
  );
}

function Instructions() {
  return (
    <ol className="text-grey-600 text-[1rem] leading-6 space-y-2">
      <li>
        1. Abra o app do seu banco ou instituição financeira e entre no
        ambiente <strong>PIX</strong>;
      </li>
      <li>
        2. Escolha a opção <strong>Pagar com QR Code</strong> e escaneie o
        código ou copie e cole a chave de pagamento;
      </li>
      <li>3. Confirme as informações e efetue o pagamento.</li>
    </ol>
  );
}

