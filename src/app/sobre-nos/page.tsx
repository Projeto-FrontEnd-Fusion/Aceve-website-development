import ImpactfulStory1 from "@/assets/impactful-stories-1.png";
import ImpactfulStory2 from "@/assets/impactful-stories-2.png";
import ImpactfulStory3 from "@/assets/impactful-stories-3.png";
import flowerBanner from "@/assets/sobre-nos-flores.png";
import Image from "next/image";

function SobreNos() {
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
  const paragraph1 =
    "A Associação Cultural e Educacional Violeta Eliz nasceu da história de superação da sua fundadora, Elizangela Maria dos Santos, que, após escapar de um ciclo de violência doméstica, decidiu transformar sua dor em propósito. Desde 2014, a ONG atua no Morro da Mandioca, na zona sul de São Paulo, fortalecendo mulheres, crianças e jovens em situação de vulnerabilidade por meio de educação, acolhimento, cultura, tecnologia e empreendedorismo.";

  const paragraph2 =
    "Inspirada na coragem das guerreiras do cotidiano, a Violeta Eliz constrói redes de apoio e promove autonomia para que mais mulheres possam escrever novas histórias — livres da violência e cheias de possibilidades.";

  return (
    <main className="flex flex-col">
      <section className="w-full p-4 tablet:my-16 tablet:mx-8 desktop:my-[4.5rem] desktop:mx-[4.82rem]">
        <div className="w-full flex flex-col tablet:items-start">
          <h2 className="font-inter font-semibold text-sm desktop:text-lg text-[#A5A1A8]">
            SOBRE NÓS
          </h2>
          <h3 className="font-inter font-bold text-2xl desktop:text-[2.5rem] text-primary-600">
            De dor à transformação
          </h3>
        </div>

        <div className="flex flex-col-reverse tablet:flex-row tablet:items-start desktop:flex-row items-center desktop:justify-center h-full">
          <div className="max-w-[592px] tablet:w-full tablet:overflow-auto tablet:z-0 max-h-[486px]">
            <div className="py-4 ">
              <p className="font-inter font-normal text-sm tablet:text-base tablet:overflow-auto desktop:text-xl text-[#A5A1A8] mb-4">
                {paragraph1}
              </p>
              <p className="font-inter font-normal text-sm tablet:text-base desktop:text-xl text-[#A5A1A8]">
                {paragraph2}
              </p>
            </div>
          </div>
          <div className="py-6 tablet:py-0 z-50">
            <figure className="">
              <Image
                src={flowerBanner}
                alt=""
                className="max-h-[17rem] max-w-[20.5rem]  tablet:max-h-[21.63rem] tablet:max-w-[23.5rem] desktop:max-h-[650px] desktop:max-w-[595px]"
              />
              {/* <figcaption className="font-inter font-semibold text-sm text-primary-600">"O amor é um ato revolucionário." <span className="font-normal"> - Elizangela Maria dos Santos</span></figcaption> */}
            </figure>
          </div>
        </div>
      </section>
      <section className="bg-purple-700 text-center py-14">
        <h2 className="text-purple-400 font-semibold">NOSSO IMPACTO</h2>
        <div className="">
          <p className="text-grey-100">138</p>
          <p className="text-grey-200">
            Jovens capacitados em tecnologia pelo projeto Viotec
          </p>
        </div>
        <div>
          <p className="text-grey-100">+538</p>
          <p className="text-grey-200">
            Mulheres diretamente beneficiadas pela ong
          </p>
        </div>
        <div>
          <p className="text-grey-100">800</p>
          <p className="text-grey-200">
            Cestas básicas entregues para famílias em vulnerabilidade
          </p>
        </div>
      </section>
      <section>
        <p>Histórias</p>
        <h2>A prova do nosso trabalho</h2>
        {impactfulStories.map((story, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <Image src={story.image} alt={story.imageAlt} />
            <span className="flex flex-col">
              <h3>{story.title}</h3>
              <p>{story.content}</p>
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default SobreNos;
