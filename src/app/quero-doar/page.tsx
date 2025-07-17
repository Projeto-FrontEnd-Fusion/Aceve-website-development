import { DonationOptions } from "@/components/DonationOptions/DonationOptions";
import PixDonationPage from "./metodos/pix/PixPayment";

function QueroDoar() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF6FE] items-center">
      <h1>Quero Doar</h1>

      <section
        className="flex flex-col items-center justify-center w-full gap-[40px]  
        bg-[#FAF6FE] tablet:bg-[#fff] tablet:rounded-[16px] 
        tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-[85%] desktop:w-[60%]"
      >
        <h2 className="text-[24px] text-[#663198] font-semibold">
          Escolha o valor da sua doação
        </h2>
        <DonationOptions />
      </section>
    </main>
  );
}

export default QueroDoar;
