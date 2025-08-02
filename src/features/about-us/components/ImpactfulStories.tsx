import ImpactfulStory1 from "@/assets/impactful-stories-1.png";
import ImpactfulStory2 from "@/assets/impactful-stories-2.png";
import ImpactfulStory3 from "@/assets/impactful-stories-3.png";
import Image from "next/image";

export const ImpactfulStories = () => {
  const impactfulStories = [
    {
      title: "De Mãos que Cuidam a um Negócio que Transforma",
      content:
        "Com o apoio da ONG, a ex-técnica de enfermagem Jucelia Pereira, 44, fundou uma bem-sucedida loja de cosméticos. Sua missão, no entanto, vai além do negócio: como voluntária, ela agora dedica seu tempo para inspirar novas empreendedoras, provando que é possível transformar a própria história.",
      image: ImpactfulStory1,
      imageAlt:
        "Jucelia Pereira, ex-técnica de enfermagem que transformou sua vida ao fundar uma loja de cosméticos, sentada em um balanço cercada por folhagens.",
    },
    {
      title: "A Força que Inspira: Jornada de Fabiana Moura",
      content:
        "Vinda do Nordeste em busca de novas oportunidades, Fabiana Moura, 41, usou sua determinação para se especializar na área da beleza com o apoio dos cursos no Violeta Eliz. Hoje, ela é uma profissional realizada e uma líder voluntária em nosso projeto, onde usa sua poderosa história de superação para inspirar outras mulheres a transformarem seus próprios futuros.",
      image: ImpactfulStory2,
      imageAlt:
        "Fabiana Moura, profissional da área da beleza e voluntária do projeto, sorrindo enquanto exibe brincos artesanais, em um ambiente de exposição com roupas ao fundo.",
    },
    {
      title: "Beleza na Era Digital: A História de Kauanny Soares",
      content: "texto descritivo  da história...",
      image: ImpactfulStory3,
      imageAlt: "descrição da imagem...",
    },
  ];

  return (
    <section>
      <p className='text-grey-500 text-lg'>
        Histórias
      </p>
      <h2 className='text-primary-800 text-[2.5rem] font-bold'>
        A prova do nosso trabalho
      </h2>
      {impactfulStories.map((story, index) =>
        <div key={index}
          className={`flex gap-10 h-[368px] items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <Image src={story.image}
            alt={story.imageAlt} />
          <span className='flex flex-col gap-4'>
            <h3 className='text-primary-600 text-2xl leading-[1.875rem] font-semibold'>
              {story.title}
            </h3>
            <p className='text-grey-600'>
              {story.content}
            </p>
          </span>
        </div>
      )}
    </section>
  )
}
