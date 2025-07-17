import { BackButton } from "@/components/BackButton/backButton";
import { DonationOptions } from "@/components/DonationOptions/DonationOptions";

function QueroDoar() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF6FE] items-center">
      <h1 className="sr-only">Quero Doar</h1>

      <section className="flex flex-col items-center justify-center w-full my-20 
        tablet:rounded-[16px] tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-[85%]">
        <BackButton />
        <div className="flex flex-col items-center justify-center w-full gap-[24px] bg-[#FFF] 
        tablet:rounded-[16px] tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-[85%] shadow-[1px_1px_4px_rgba(52,52,52,0.2)]">

          <h2 className="text-[24px] text-[#663198] font-semibold">
            Escolha o valor da sua doação
          </h2>
          <DonationOptions />
        </div>
      </section>
    </main>
  );
}

export default QueroDoar;
