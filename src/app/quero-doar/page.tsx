import { DonationOptions } from "@/components/DonationOptions/DonationOptions";

function QueroDoar() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF6FE] w-full m-auto">

      <section className='flex flex-col items-center gap-[40px] '>

        <div className='flex flex-col items-baseline w-full   
        tablet:py-4 tablet:px-8 desktop:py-8 desktop:px-16 gap-2 py-2 px-6 mobileMini:py-4 mobileMini:px-12 '>
          <h1 className="text-[40px] text-[#663198] font-bold ">
            Doações e Arrecadações
          </h1>
          <p className="text-lxl text-[#5F5764] ">
            Sua doação financia ações sociais que acolhem, cuidam e empoderam mulheres, crianças e jovens em situação de vulnerabilidade nas favelas da Zona Sul de São Paulo.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full gap-[40px]  
        bg-[#FAF6FE] tablet:bg-[#fff] tablet:rounded-[16px] 
        tablet:py-[16px] tablet:px-[32px] desktop:py-6 
        tablet:w-[85%] desktop:w-[60%]'>
          Como sua doação faz diferença
        </div>

        <div className='flex flex-col items-center justify-center w-full gap-[40px]  
        bg-[#FAF6FE] tablet:bg-[#fff] tablet:rounded-[16px] 
        tablet:py-[16px] tablet:px-[32px] desktop:py-6 
        tablet:w-[85%] desktop:w-[60%]' >
          <div>
            <h2 className="text-[24px] text-[#663198] font-semibold">
              Escolha o valor da sua doação
            </h2>
            <DonationOptions />
          </div>
        </div>
      </section>

    </main>
  );
}

export default QueroDoar;
