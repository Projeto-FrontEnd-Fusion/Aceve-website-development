import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import BannerImg from "@/assets/BannerImg.png";
import { GlobalLink } from "@/components/GlobalLink/GlobalLink";

const BannerHero = () => {
  return (
    <section
      className={clsx(
        "w-full  flex flex-col relative gap-4 px-4 pt-4 pb-0 mobileXLarger:pt-0 mobileXLarger:pr-0 tablet:pl-8 laptop:pl-[4.5rem]",
        "mobileXLarger:overflow-y-hidden mobileXLarger:flex-row-reverse"
      )}
    >
      <figure
        className="relative w-full self-center h-auto mobileXLarger:flex-shrink-0 mobileXLarger:flex-grow-0
      mobileXLarger:w-[292px] mobileXLarger:h-[524px] 
      mobileXLarger:px-0
      tablet:w-[356px] tablet:h-[488px] 
      laptop:w-[464px] laptop:h-[628px] 
      desktop:w-[572px] desktop:h-[601px] 
      desktopLarge:w-[700px] desktopLarge:h-[683px]"
      >
        <Image
          alt="Imagem de um banner representando empoderamento e igualdade"
          src={BannerImg}
          className="object-cover object-center mobileXLarger:h-full mobileXLarger:w-full"
        />
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
      </figure>

      <article
        className={clsx(
          "flex flex-col gap-4",
          "mobileXLargerpy-10 tablet:mr-6 desktop:mr-16",
          "mobileXLarger:justify-center mobileXLarger:items-start mobileXLarger:w-auto"
        )}
      >
        <h1
          className={clsx(
            "text-black leading-7 mobileXLarger:leading-[2.875rem] font-bold text-[1.125rem] tablet:text-[2.5rem] mobileXLarger:text-[2.1875rem] mobileMicro:text-[1.5rem] w-full",
            "whitespace-normal"
          )}
        >
          <span className="text-primary-800 font-bold">
            Pelo poder de cada{" "}
            <span className="text-primary-500 font-bold">mulher</span>
          </span>
          <br />
          <span className="text-primary-800 font-bold">
            Por um futuro mais{" "}
            <span className="text-primary-500 font-bold">justo</span>
          </span>
        </h1>

        <p
          className="w-full text-gray-600 text-[0.875rem]
          leading-5 
          md:text-[1.125rem] laptop:leading-7 laptop:text-[1.25rem] md:w-full md:leading-7 text-justify"
        >
          Capacitamos mulheres em situação de vulnerabilidade para que
          conquistem autonomia, rompam ciclos de violência e transformem suas
          vidas.
        </p>

        <GlobalLink
          variant="primary"
          className="
          w-full font-semibold mobileXLarger:w-fit py-4 mobileXLarger:px-5
          flex-grow mobileXLarger:flex-grow-0"
          href={"/quero-doar"}
        >
          AJUDE AGORA
        </GlobalLink>
      </article>
    </section>
  );
};

export default BannerHero;
