import Image from "next/image";
import floralFrameImage from "@/assets/changemaker.png";

export const Changemaker = () => {
  return (
    <section className="w-full bg-[#F2EBFC] px-[1rem] py-[3rem] tablet:px-[2rem] desktop:px-[4rem] flex flex-col tablet:flex-row items-center justify-between gap-[2rem]">
      <div className="flex flex-col items-center tablet:items-start w-full tablet:max-w-[50%] max-w-[35.0625rem] gap-[1.5625rem] text-center tablet:text-left">
        <h2
          className="font-inter font-bold text-[1.5rem] tablet:text-[2.5rem] leading-[1.875rem] tablet:leading-[2.875rem] tracking-[-0.015rem] tablet:tracking-[-0.05rem] text-center tablet:text-left"
          style={{ fontStyle: "normal" }}
        >
          <span className="text-[#823DC7] block tablet:inline">
            Seja um agente da{" "}
          </span>
          <span className="text-[#54287B] block tablet:inline">MUDANÇA</span>
        </h2>

        <div className="w-full tablet:hidden flex justify-center">
          <Image
            src={floralFrameImage}
            alt="Imagem institucional decorada com moldura floral"
            className="object-cover h-auto transition-all duration-500 max-w-[90%] mx-auto"
          />
        </div>

        <p
          className="font-inter text-[1rem] tablet:text-[1.25rem] leading-[1.5rem] tablet:leading-[1.75rem] font-normal text-[#5F5764] text-left align-self-start"
          style={{ fontStyle: "normal" }}
        >
          Acreditamos no poder da comunidade. Cada doação garante um prato de
          comida, um curso de tecnologia ou o suporte para uma mulher recomeçar.
          Cada hora de voluntariado se transforma em conhecimento e esperança.
          Sua ajuda, seja como for, é o que mantém nossa revolução de amor em
          movimento.
        </p>
        <div className="flex justify-center w-full">
          <a
            href="/quero-doar"
            className="w-[17.5rem] h-[3.5rem] flex justify-center items-center gap-[0.5rem]
    px-[1.25rem] py-[1rem] rounded-[0.5rem] bg-[#823DC7] text-[#FFF] text-[1rem]
    leading-[1.5rem] font-semibold font-inter transition duration-300 hover:bg-[#6C2BB3]"
          >
            Quero doar
          </a>
        </div>
      </div>

      <div className="hidden tablet:flex w-full tablet:max-w-[50%] mt-[2rem] tablet:mt-0 justify-center">
        <Image
          src={floralFrameImage}
          alt="Imagem institucional decorada com moldura floral"
          className="object-cover h-auto transition-all duration-500 
                   max-w-[24rem] tablet:max-w-[28rem] desktop:max-w-[32rem] mx-auto"
        />
      </div>
    </section>
  );
};
