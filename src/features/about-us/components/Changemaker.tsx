import Image from "next/image";
import Link from "next/link";
import floralFrameImage from "@/assets/changemaker.png";

export const Changemaker = () => {
  return (
    <section className="w-full bg-primary-200 px-4 py-12 tablet:px-8 desktop:px-16 flex flex-col desktop:flex-row items-center justify-between gap-8">
      <div className="flex flex-col items-center tablet:max-w-[50%] max-w-[35rem] gap-6 order-1 desktop:order-1 text-center tablet:text-center desktop:text-left mx-auto desktop:mx-0">
        <h2 className="font-inter font-bold text-2xl tablet:text-[2rem] desktop:text-[2.5rem] leading-tight tracking-tight max-w-full">
          <span className="block tablet:inline text-primary-600">
            Seja um agente da{" "}
          </span>
          <span className="block tablet:inline text-primary-800">MUDANÇA</span>
        </h2>

        <div className="w-full flex justify-center desktop:hidden max-w-[28rem] mx-auto mt-6">
          <Image
            src={floralFrameImage}
            alt="Imagem institucional decorada com moldura floral"
            className="object-cover h-auto max-w-full transition-all duration-500"
          />
        </div>

        <p className="font-inter text-base tablet:text-lg leading-relaxed text-grey-600 text-left max-w-full">
          Acreditamos no poder da comunidade. Cada doação garante um prato de
          comida, um curso de tecnologia ou o suporte para uma mulher recomeçar.
          Cada hora de voluntariado se transforma em conhecimento e esperança.
          Sua ajuda, seja como for, é o que mantém nossa revolução de amor em
          movimento.
        </p>

        <div className="w-full flex justify-center tablet:justify-center max-w-full">
          <Link href="/quero-doar" className="w-80 tablet:w-72">
            <button className="w-full h-14 flex items-center justify-center gap-2 px-5 py-4 rounded-lg bg-primary-600 text-grey-100 text-base font-inter transition duration-300 hover:bg-primary-500">
              Quero doar
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden desktop:flex desktop:max-w-[50%] justify-center order-2 max-w-[32rem] mt-0">
        <Image
          src={floralFrameImage}
          alt="Imagem institucional decorada com moldura floral"
          className="object-cover h-auto max-w-full transition-all duration-500"
        />
      </div>
    </section>
  );
};
