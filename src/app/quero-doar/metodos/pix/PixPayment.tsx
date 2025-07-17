"use client";

export default function PixDonationPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-8 sm:py-12  bg-white sm:bg-[#FAF6FE]">
      <div className="w-full mb-4 pl-2 sm:pl-12 md:pl-20 lg:pl-20 self-start">
        <button className="flex items-center gap-2 px-4 py-3 text-lg text-[#A5A1A8] hover:opacity-90 transition-opacity">
          &lt; Voltar
        </button>
      </div>
      <section
        className="w-full max-w-[520px] bg-white sm:bg-white rounded-none sm:rounded-2xl shadow-none sm:shadow-md p-6 sm:p-8 flex flex-col gap-6 sm:gap-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-[#663198] tracking-[-0.01em] text-center font-inter">
          Pagamento via PIX
        </h1>

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

        <div className="flex justify-center">
          <div className="w-40 h-40 object-contain bg-zinc-300 rounded" />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
          <input
            type="text"
            readOnly
            value="0" // teste
            className="w-full sm:w-[calc(100%-165px)] px-4 py-3 rounded-lg border-2 border-[#A468E4] bg-white text-zinc-700 text-sm outline-none"
          />

          <button className="w-full sm:w-[157px] px-5 py-3 border-2 border-[#823DC7] rounded-lg text-[#823DC7] font-semibold text-sm hover transition-colors whitespace-nowrap">
            Copiar link
          </button>
        </div>
      </section>
    </main>
  );
}
