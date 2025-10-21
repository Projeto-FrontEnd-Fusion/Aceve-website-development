import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import Image from "next/image";
import floralFrameImage from "@/assets/changemaker.png";

export const Changemaker = () => {
  return (
    <section className="w-full bg-primary-200 px-4 py-8 tablet:px-8 desktop:px-[4.5rem]">
      <div className="desktop:items-center">
        <div className="grid grid-cols-1 desktop:grid-cols-[auto_auto] grid-rows-[auto_auto_auto_auto] desktop:grid-rows-[1fr_1fr_1fr] place-items-center desktop:gap-y-0 gap-6 text-center desktop:text-left desktop:w-full">
          <h2 className="row-start-1 items-center justify-self-center desktop:justify-self-start desktop:self-end font-inter font-bold text-2xl tablet:text-[2.5rem] leading-tight tracking-tight text-center desktop:text-left order-1">
            <span className="block tablet:inline text-primary-600 whitespace-pre-wrap">
              {"Seja um agente da "}
            </span>
            <span className="block tablet:inline text-primary-800">
              MUDANÇA
            </span>
          </h2>

          <Image
            src={floralFrameImage}
            alt="Imagem institucional decorada com moldura floral"
            className="object-cover self-center justify-self-center w-[65%] desktop:w-auto desktop:h-[680px] desktop:py-14 h-auto max-w-full transition-all duration-500 row-start-2 desktop:row-start-1 desktop:col-start-2 desktop:row-span-3"
          />

          <p className="row-start-3 desktop:row-start-2 desktop:col-start-1 desktop:self-center desktop:justify-self-start desktop:max-w-[34rem] font-inter text-base tablet:text-xl desktop:text-xl leading-relaxed text-grey-600 text-left max-w-full">
            Acreditamos no poder da comunidade. Cada doação garante um prato de
            comida, um curso de tecnologia ou o suporte para uma mulher
            recomeçar. Cada hora de voluntariado se transforma em conhecimento e
            esperança. Sua ajuda, seja como for, é o que mantém nossa revolução
            de amor em movimento.
          </p>

          <div className="desktop:row-start-3 desktop:row-span-2 desktop:self-start w-full flex flex-col tablet:flex-row desktop:flex-row justify-center tablet:justify-center desktop:justify-start gap-4 max-w-full">
            <GlobalLink
              href="/quero-doar"
              variant="primary"
              className="w-full tablet:w-72 h-14 gap-2 px-5 py-4 text-base font-inter font-semibold"
            >
              Quero doar
            </GlobalLink>

            <GlobalLink
              href="/faca-parte"
              variant="outlined-primary-700"
              className="w-full tablet:w-72 h-14 gap-2 px-5 py-4 text-base font-inter font-semibold"
            >
              Quero Voluntariar
            </GlobalLink>
          </div>
        </div>
      </div>
    </section>
  );
};
