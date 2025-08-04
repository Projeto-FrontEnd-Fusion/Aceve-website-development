import React from "react";

const OurImpact = () => {
  return (
    <section className="w-full bg-purple-700 pt-8 pb-16 px-4 md:px-8 lg:px-[4.5rem] lg:pt-8 lg:pb-16 lg:min-h-[19.0625rem] md:min-h-[15.375rem] min-h-[29.625rem]">
      <div className="max-w-[100rem] mx-auto text-center">
        <h2 className="font-semibold text-purple-400 mb-10 text-[0.875rem] leading-[1.25rem] sm:text-[1.125rem] sm:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.875rem]">
          NOSSO IMPACTO
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 lg:gap-6 items-center lg:items-start">
          <div className="flex-1 flex flex-col items-center justify-start text-center min-h-[6.25rem]">
            <p className="font-bold text-[3.5rem] leading-[3.875rem] tracking-[-0.02em] text-grey-100 lg:text-[5.625rem] lg:leading-[6.1875rem]">
              138
            </p>
            <p className="font-normal text-sm lg:text-base text-grey-200 mt-2 max-w-[22rem] whitespace-pre-line">
              <span className="block lg:hidden md:hidden">
                Jovens capacitados em tecnologia pelo projeto
                <br />
                Viotec
              </span>
              <span className="hidden md:block lg:hidden">
                Jovens capacitados
                <br />
                em tecnologia pelo projeto Viotec
              </span>
              <span className="hidden lg:block">
                Jovens capacitados em tecnologia
                <br />
                pelo projeto Viotec
              </span>
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-start text-center min-h-[6.25rem]">
            <p className="font-bold text-[3.5rem] leading-[3.875rem] tracking-[-0.02em] text-grey-100 lg:text-[5.625rem] lg:leading-[6.1875rem]">
              +538
            </p>
            <p className="font-normal text-sm lg:text-base text-grey-200 mt-2 max-w-[22rem] whitespace-pre-line">
              <span className="block lg:hidden md:hidden">
                Mulheres diretamente beneficiadas pela ong
              </span>
              <span className="hidden md:block lg:hidden">
                Mulheres diretamente
                <br />
                beneficiadas pela ong
              </span>
              <span className="hidden lg:block">
                Mulheres diretamente beneficiadas pela ong
              </span>
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-start text-center min-h-[6.25rem]">
            <p className="font-bold text-[3.5rem] leading-[3.875rem] tracking-[-0.02em] text-grey-100 lg:text-[5.625rem] lg:leading-[6.1875rem]">
              800
            </p>
            <p className="font-normal text-sm lg:text-base text-grey-200 mt-2 max-w-[22rem] whitespace-pre-line">
              <span className="block lg:hidden md:hidden">
                Cestas básicas entregues para famílias em
                <br />
                vulnerabilidade
              </span>
              <span className="hidden md:block lg:hidden">
                Cestas básicas entregues para
                <br />
                famílias em vulnerabilidade
              </span>
              <span className="hidden lg:block">
                Cestas básicas entregues para famílias
                <br />
                em vulnerabilidade
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
