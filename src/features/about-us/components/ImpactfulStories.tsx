import ImpactfulStory1 from "@/assets/impactful-stories-1.png";
import ImpactfulStory2 from "@/assets/impactful-stories-2.png";
import ImpactfulStory3 from "@/assets/impactful-stories-3.png";
import Image from "next/image";

export const ImpactfulStories = () => {
  const paragraphClassname = "text-sm tablet:text-base desktop:text-xl";
  const impactfulStories = [
    {
      title: "De Mãos que Cuidam a um Negócio que Transforma",
      paragraph: (
        <p className={paragraphClassname}>
          Com o apoio da ONG, a ex-técnica de enfermagem{" "}
          <span className="font-bold">Jucelia Pereira</span>, 44, fundou uma
          bem-sucedida loja de cosméticos. Sua missão, no entanto, vai além do
          negócio: como voluntária, ela agora dedica seu tempo para inspirar
          novas empreendedoras, provando que é possível transformar a própria
          história.
        </p>
      ),
      image: ImpactfulStory1,
      imageAlt:
        "Jucelia Pereira, ex-técnica de enfermagem que transformou sua vida ao fundar uma loja de cosméticos, sentada em um balanço cercada por folhagens.",
    },
    {
      title: "A Força que Inspira: Jornada de Fabiana Moura",
      paragraph: (
        <p className={paragraphClassname}>
          Vinda do Nordeste em busca de novas oportunidades,{" "}
          <span className="font-bold">Fabiana Moura</span>, 41, usou sua
          determinação para se especializar na área da beleza com o apoio dos
          cursos no Violeta Eliz. Hoje, ela é uma profissional realizada e uma
          líder voluntária em nosso projeto, onde usa sua poderosa história de
          superação para inspirar outras mulheres a transformarem seus próprios
          futuros.
        </p>
      ),
      image: ImpactfulStory2,
      imageAlt:
        "Fabiana Moura, profissional da área da beleza e voluntária do projeto, sorrindo enquanto exibe brincos artesanais, em um ambiente de exposição com roupas ao fundo.",
    },
    {
      title: "Beleza na Era Digital: A História de Kauanny Soares",
      paragraph: (
        <p className={paragraphClassname}>
          Aluna da primeira turma de Empreendedorismo da ONG Violeta Eliz,{" "}
          <span className="font-bold">Kauanny Soares</span>, 21, aplicou o
          conhecimento em Marketing Digital para se lançar como Lash e Designer
          de Sobrancelhas. Agora, ela retribui como voluntária, usando seu
          talento para impulsionar o projeto nas redes sociais.
        </p>
      ),
      image: ImpactfulStory3,
      imageAlt:
        "Kauanny Soares, jovem, com tiara, segurando uma pinça de design de sobrancelhas, simbolizando sua atuação como lash e designer",
    },
  ];

  return (
    <section className="h-fit flex flex-col px-4 py-10 gap-5 tablet:px-8 tablet:py-16 tablet:gap-12 desktop:px-[4.5rem] desktop:py-16">
      <div className="flex flex-col w-full items-start">
        <p className="uppercase text-grey-500 text-lg font-semibold">
          Histórias
        </p>
        <h2 className="text-primary-800 text-[2.5rem] font-bold">
          A prova do nosso trabalho
        </h2>
      </div>
      <div className="flex flex-col w-full gap-5 text-justify">
        {impactfulStories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col gap-10 h-fit items-center ${
              index % 2 === 0 ? "tablet:flex-row" : "tablet:flex-row-reverse"
            }`}
          >
            <Image
              src={story.image}
              alt={story.imageAlt}
              className="w-auto h-[239px] tablet:h-[230px] desktop:h-[368px]"
            />
            <span className="flex flex-col gap-4 text-grey-600">
              <h3 className="text-primary-600 text-2xl leading-6 tablet:leading-[1.875rem] desktop:leading-9 font-semibold">
                {story.title}
              </h3>
              {story.paragraph}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
