import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import Image from "next/image";
import floralFrameImage from "@/assets/changemaker.png";

export const Changemaker = () => {
  return (
    <section className="w-full bg-primary-200 px-4 py-8 tablet:px-8 desktop:px-16">
      <div className="grid gap-6 desktop:grid-cols-2 desktop:items-center">
        <div className="flex flex-col gap-6 text-center desktop:text-left">
          <h2 className="font-inter font-bold text-2xl tablet:text-[2rem] desktop:text-[2.5rem] leading-tight tracking-tight text-center desktop:text-left order-1">
            <span className="block tablet:inline text-primary-600">
              Seja um agente da{" "}
            </span>
            <span className="block tablet:inline text-primary-800">
              MUDANÇA
            </span>
          </h2>

          <div className="w-full flex justify-center order-2 desktop:order-3">
            <Image
              src={floralFrameImage}
              alt="Imagem institucional decorada com moldura floral"
              className="object-cover h-auto max-w-full transition-all duration-500"
            />
          </div>

          <p className="font-inter text-base tablet:text-lg desktop:text-xl leading-relaxed text-grey-600 text-left max-w-full order-3 desktop:order-1">
            Acreditamos no poder da comunidade. Cada doação garante um prato de
            comida, um curso de tecnologia ou o suporte para uma mulher
            recomeçar. Cada hora de voluntariado se transforma em conhecimento e
            esperança. Sua ajuda, seja como for, é o que mantém nossa revolução
            de amor em movimento.
          </p>

          <div className="w-full flex justify-center tablet:justify-center desktop:justify-start max-w-full order-4">
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
