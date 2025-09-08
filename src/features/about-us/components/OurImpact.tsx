import React from "react";

const OurImpact = () => {
  return (
    <section className="w-full bg-primary-700 pt-8 pb-8 px-4 md:px-8 lg:px-[4.5rem] lg:pt-8 lg:pb-16 flex flex-col items-center gap-6">
      <h2 className="font-semibold text-center text-primary-400 text-[0.875rem] leading-[1.25rem] sm:text-[1.125rem] sm:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.875rem]">
        NOSSO IMPACTO
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 lg:gap-6 items-center lg:items-start">
        <div className="flex-1 flex flex-col items-center justify-start text-center min-h-[6.25rem]">
          <p className="font-bold text-[3.5rem] leading-[3.875rem] tracking-[-0.02em] text-grey-100 lg:text-[5.625rem] lg:leading-[6.1875rem]">
            138
          </p>
          <p className="font-normal text-sm lg:text-base text-grey-200 mt-2 max-w-[22rem] whitespace-pre-line">
            Jovens capacitados em tecnologia
            <br /> pelo projeto Viotec
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start text-center min-h-[6.25rem]">
          <p className="font-bold text-[3.5rem] leading-[3.875rem] tracking-[-0.02em] text-grey-100 lg:text-[5.625rem] lg:leading-[6.1875rem]">
            +538
          </p>
          <p className="font-normal text-sm lg:text-base text-grey-200 mt-2 max-w-[22rem] whitespace-pre-line">
            Mulheres diretamente beneficiadas pela ong
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start text-center min-h-[6.25rem]">
          <p className="font-bold text-[3.5rem] leading-[3.875rem] tracking-[-0.02em] text-grey-100 lg:text-[5.625rem] lg:leading-[6.1875rem]">
            800
          </p>
          <p className="font-normal text-sm lg:text-base text-grey-200 mt-2 max-w-[22rem] whitespace-pre-line">
            Cestas básicas entregues para <br />
            famílias em vulnerabilidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
