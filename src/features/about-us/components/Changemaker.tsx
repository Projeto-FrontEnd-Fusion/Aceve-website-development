import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import Image from "next/image";
import floralFrameImage from "@/assets/changemaker.png";

export const Changemaker = () => {
  return (
    <section className="w-full bg-primary-200 px-4 py-8 tablet:px-8 desktop:px-16">
      <div className="grid grid-rows-[auto_auto] grid-cols-1 min-md:gap-8 ">
        
        <div className="row-start-2 desktop:row-start-1 flex flex-col items-center desktop:items-start min-md:gap-6">

          <div>
            <h2 className="font-inter font-bold text-2xl tablet:text-[2rem] desktop:text-[2.5rem] leading-tight tracking-tight text-center desktop:text-left">
              <span className="block tablet:inline text-primary-600">
                Seja um agente da{" "}
              </span>
              <span className="block tablet:inline text-primary-800">
                MUDANÇA
              </span>
            </h2>
          </div>
          <div className="row-start-1 desktop:row-start-1 flex justify-center desktop:justify-end">

            <Image
              src={floralFrameImage}
              alt="Imagem institucional decorada com moldura floral"
              className="object-contain h-auto max-w-[18rem] tablet:max-w-[32rem] desktop:max-w-[50rem] transition-all duration-500"
            />
          </div>
          <div className="flex flex-col gap-8 items-center">
            <p className="font-inter text-base tablet:text-lg desktop:text-xl leading-relaxed text-grey-600 min-md:text-center desktop:text-left max-w-full">
              Acreditamos no poder da comunidade. Cada doação garante um prato de
              comida, um curso de tecnologia ou o suporte para uma mulher
              recomeçar. Cada hora de voluntariado se transforma em conhecimento e
              esperança. Sua ajuda, seja como for, é o que mantém nossa revolução
              de amor em movimento.
            </p>

            <GlobalLink
              href="/quero-doar"
              variant="primary"
              className="w-80 tablet:w-72 h-14 gap-2 px-5 py-4 text-base font-inter"
            >
              Quero doar
            </GlobalLink>
          </div>

        </div>

      </div>
    </section>
  );
};
