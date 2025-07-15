import Link from "next/link";
import Image from "next/image";

function Metodos() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF6FE] items-center">
      <h1 className="sr-only">Métodos</h1>

      <section
        className="flex flex-col items-center justify-center w-full gap-[24px] bg-[#FFF] 
        tablet:rounded-[16px] tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-[85%] desktop:w-[60%] shadow-[1px_1px_4px_rgba(52,52,52,0.2)]"
      >
        <h2 className="text-[24px] text-[#663198] font-semibold text-center mb-4">
          Escolha sua forma de pagamento
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 w-full max-w-[780px]">
          <div className="w-[346px]">
            <Link
              href="/quero-doar/metodos/paypal"
              className="flex items-center gap-3 bg-white w-full h-[56px] rounded-[8px] border-2 
              border-[#D6BDF5] px-6 font-semibold text-[#5F5764]  
              hover:bg-[#F2EBFC] transition duration-300"
            >
              <Image
                src="/paypal-icon.svg"
                alt="Ícone PayPal"
                width={30}
                height={8}
              />
              <span className="text-[#54287B] font-medium">
                Pagamento via PayPal
              </span>
            </Link>
          </div>
          <div className="w-[346px]">
            <Link
              href="/quero-doar/metodos/pix"
              className="flex items-center gap-3 bg-white w-full h-[56px] rounded-[8px] border-2 
              border-[#D6BDF5] px-6 font-semibold text-[#5F5764]  
              hover:bg-[#F2EBFC] transition duration-300"
            >
              <Image
                src="/pix-icon.svg"
                alt="Ícone Pix"
                width={32}
                height={32}
              />
              <span className="text-[#54287B] font-medium">
                Pagamento via PIX
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-[780px] px-4">
          <p className="text-sm text-gray-600 mt-2 text-left w-[346px]">
            Você será redirecionado para completar a doação
          </p>
        </div>
      </section>
    </main>
  );
}

export default Metodos;
