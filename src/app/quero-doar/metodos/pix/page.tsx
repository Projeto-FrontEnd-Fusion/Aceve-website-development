"use client";

import { FaCheckCircle } from "react-icons/fa";
import { usePixCode } from "./usePixCode";
import { BackButton } from "@/components/BackButton/backButton";

export default function Page() {
  const {
    qrCodeBase64,
    brCode,
    loading,
    copied,
    handleCopy,
  } = usePixCode();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-8 sm:py-12 bg-white sm:bg-[#FAF6FE]">
      <div className="self-start">
        <BackButton />
      </div>

      <section className="w-full max-w-[520px] bg-white sm:bg-white rounded-none sm:rounded-2xl shadow-none sm:shadow-md p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
        <Header />
        <Instructions />
        <QRCodeDisplay loading={loading} qrCodeBase64={qrCodeBase64} />
        <CopySection
          brCode={brCode}
          copied={copied}
          onCopy={handleCopy}
        />
      </section>
    </main>
  );
}



function Header() {
  return (
    <h1 className="text-xl sm:text-2xl font-semibold text-[#663198] tracking-[-0.01em] text-center font-inter">
      Pagamento via PIX
    </h1>
  );
}

function Instructions() {
  return (
    <ol className="text-[#5F5764] text-[16px] leading-[24px] font-inter space-y-2">
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

function QRCodeDisplay({
  loading,
  qrCodeBase64,
}: {
  loading: boolean;
  qrCodeBase64: string | null;
}) {
  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="w-40 h-40 object-contain bg-zinc-300 rounded" />
      ) : qrCodeBase64 ? (
        <img
          src={qrCodeBase64}
          alt="QR Code para pagamento PIX"
          className="w-40 h-40 object-contain"
        />
      ) : (
        <div className="text-red-500 text-center">
          Erro ao gerar QR Code.
        </div>
      )}
    </div>
  );
}

function CopySection({
  brCode,
  copied,
  onCopy,
}: {
  brCode: string | null;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
      <input
        type="text"
        readOnly
        value={brCode || ""}
        className="w-full sm:w-[calc(100%-165px)] px-4 py-3 rounded-lg border-2 border-[#A468E4] bg-white text-zinc-700 text-sm outline-none"
      />

      <button
        onClick={onCopy}
        className={`w-full sm:w-[157px] px-5 py-3 border-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap flex items-center justify-center gap-2
          ${copied
            ? "bg-[#823DC7] text-[#FFFFFF] border-[#823DC7] hover:bg-[#54287B]"
            : "text-[#823DC7] border-[#823DC7] hover:bg-[#823DC7] hover:text-[#FFFFFF]"
          }`}
      >
        {copied ? (
          <>
            <span className="text-[#FFFFFF]">Copiado</span>
            <FaCheckCircle size={16} className="text-[#FFFFFF]" />
          </>
        ) : (
          "Copiar link"
        )}
      </button>
    </div>
  );
}
