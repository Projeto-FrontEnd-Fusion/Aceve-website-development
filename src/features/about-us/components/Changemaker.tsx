import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import Image from "next/image";
import floralFrameImage from "@/assets/changemaker.png";

export const Changemaker = () => {
  return (
    <section className="w-full bg-primary-200 px-4 py-12 tablet:px-8 desktop:px-16">
      <div className="grid grid-rows-[auto_auto] grid-cols-1 gap-8 desktop:grid-rows-1 desktop:grid-cols-2 desktop:items-center desktop:gap-24">
        <div className="row-start-2 desktop:row-start-1 flex flex-col items-center desktop:items-start gap-6">
          <h2 className="font-inter font-bold text-2xl tablet:text-[2rem] desktop:text-[2.5rem] leading-tight tracking-tight text-center desktop:text-left">
            <span className="block tablet:inline text-primary-600">
              Seja um agente da{" "}
            </span>
            <span className="block tablet:inline text-primary-800">
              MUDANÇA
            </span>
          </h2>

          <p className="font-inter text-base tablet:text-lg desktop:text-xl leading-relaxed text-grey-600 text-center desktop:text-left max-w-full">
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
        <div className="row-start-1 desktop:row-start-1 flex justify-center desktop:justify-end">
          <Image
            src={floralFrameImage}
            alt="Imagem institucional decorada com moldura floral"
            className="object-contain h-auto max-w-[18rem] tablet:max-w-[32rem] desktop:max-w-[50rem] transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};
