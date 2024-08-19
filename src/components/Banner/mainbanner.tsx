import type { IbannerProps } from "@/@types/bannerTypes";

const BannerHero = ({
  title,
  description,
  action,
  bannerImg,
  ...props
}: IbannerProps) => {
  return (
    <section
      {...props}
      className="w-screen flex flex-col relative hero-banner lg:flex-row -z-30"
    >
      <figure className="relative">
        <img
          src={bannerImg}
          alt="Imagem de um banner representando empoderamento e igualdade"
          className="w-full"
        />
        <figcaption className="sr-only">
          A imagem retrata uma mulher negra em meio a uma comunidade carente de
          uma cidade brasileira. Ela exibe uma expressão determinada, com o
          rosto sério, enquanto levanta uma mão com o punho cerrado,
          simbolizando força e resistência.
        </figcaption>
        <div className="shadeContainer"></div>
      </figure>

      <article className="w-screen bg-purple-haiti px-7 flex flex-col gap-4 mt-[-8px] py-10">
        <h2 className="text-white-normal font-montserrat font-bold pr-20 ">
          {title}
        </h2>
        <p className="text-white-normal font-roboto text-[12px]">
          {description}
        </p>
        <button>{action}</button>
      </article>
    </section>
  );
};

export default BannerHero;
