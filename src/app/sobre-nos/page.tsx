import ImpactfulStory1 from "@/assets/impactful-stories-1.png";
import ImpactfulStory2 from "@/assets/impactful-stories-2.png";
import ImpactfulStory3 from "@/assets/impactful-stories-3.png";
import flowerBanner from "@/assets/sobre-nos-flores.png";
import TheViolets from "@/assets/theViolets.png";
import floralFrameImage from "@/assets/changemaker.png"
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

  const whatWeDo = [
    {
      title: "As Violetas",
      content:
        "O Projeto As Violetas acolhe mulheres e adolescentes em situação de extrema vulnerabilidade, oferecendo apoio psicológico e social em um ambiente seguro. Por meio de rodas de conversa, workshops e dinâmicas, o projeto promove reflexões sobre violência doméstica e fortalece redes de apoio. Atua também em parceria com serviços públicos para garantir proteção e acesso a direitos.",
      alt: "Foto que mostra o acolhimento de mulheres e adolescentes em situação de extrema vulnerabilidade",
      image: TheViolets,
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="w-full m-auto p-4 tablet:my-16 tablet:px-8 desktop:my-[4.5rem] desktop:px-[4.82rem] desktop:max-w-[1280px]">
        <div className="w-full flex flex-col tablet:items-start ">
          <h2 className="font-inter font-semibold text-sm desktop:text-lg text-[#A5A1A8] mb-2">
            SOBRE NÓS
          </h2>
          <h3 className="font-inter font-bold text-2xl desktop:text-[2.5rem] text-primary-600 ">
            De dor à transformação
          </h3>
        </div>

        <div className="flex flex-col-reverse items-center tablet:flex-row tablet:items-start desktop:flex-row desktop:justify-between  h-full">
          <div className="max-w-[592px] tablet:w-full tablet:overflow-auto tablet:z-0 max-h-[486px]">
            <div className="py-6 desktop:py-8 ">
              <p className="font-inter font-normal text-sm tablet:text-base tablet:overflow-auto desktop:text-xl text-[#A5A1A8] mb-4">
                {paragraph1}
              </p>
              <p className="font-inter font-normal text-sm tablet:text-base desktop:text-xl text-[#A5A1A8]">
                {paragraph2}
              </p>
            </div>
          </div>
          <div className="py-6 tablet:py-0 z-50">
            <figure className="flex items-center flex-col">
              <Image src={flowerBanner} alt="" className="overflow" />
              {/* max-h-[17rem] max-w-[20.5rem] teblet:min-h-[650px] tablet:min-w-[95px] */}
              <figcaption className="font-inter font-semibold text-sm text-primary-600 text-center">
                "O amor é um ato revolucionário."{" "}
                <span className="font-normal">
                  {" "}
                  <span className="hidden tablet:inline">-</span>{" "}
                  <br className="tablet:hidden" />
                  Elizangela Maria dos Santos
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="w- full bg-purple-700 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center mb-8">
          <h2 className="text-[24px] leading-[30px] tracking-[-0.01em] text-purple-400 font-semibold">
            NOSSO IMPACTO
          </h2>
          <div>
            <p className=" font-bold text-[90px] leading-[99px] tracking-[-0.02em] text-grey-100">
              138
            </p>
            <p className="font-normal text-base leading-6 text-center text-grey-200">
              Jovens capacitados em tecnologia pelo projeto Viotec
            </p>
          </div>
          <div>
            <p className="font-bold text-[90px] leading-[99px] tracking-[-0.02em] text-grey-100">
              +538
            </p>
            <p className="font-normal text-base leading-6 text-center text-grey-200">
              Mulheres diretamente beneficiadas pela ong
            </p>
          </div>
          <div>
            <p className=" font-bold text-[90px] leading-[99px] tracking-[-0.02em] text-grey-100">
              800
            </p>
            <p className="font-normal text-base leading-6 text-center text-grey-200">
              Cestas básicas entregues para famílias em vulnerabilidade
            </p>
          </div>
        </div>
      </section>
      <section className="py-6 px-4 gap-4 flex flex-col max-w-[500px]">
        <h3 className="font-semibold text-2xl tracking-[1%] text-[#A468E4]">
          Um olhar sobre o que fazemos
        </h3>
        <nav></nav>
        {whatWeDo.map(({ content, image, title, alt }, index) => (
          <div className="flex flex-col gap-4">
            <h4 className="text-[#823DC7]  font-semibold text-lg tracking-[-0.5% md:hidden">
              {title}
            </h4>
            <Image src={image} alt={alt} className="" />
            <div className="flex flex-col gap-4">
              <h4 className="text-[#823DC7]  font-semibold text-lg tracking-[-0.5% max-md:hidden">
                {title}
              </h4>
              <p className="text-[#2A272C] text-sm">{content}</p>
              <button className="w-full text-[#663198] bg-transparent text-xs leading-5 font-semibold border-2 border-[#823DC7] rounded-lg py-2 hover:bg-[#663198] transition duration-300 hover:text-white-smooth">
                Saiba mais
              </button>
            </div>
          </div>
        ))}
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
      {/* Seção "Agente de Mudança" */}
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

          <p
            className="font-inter text-[1rem] tablet:text-[1.25rem] leading-[1.5rem] tablet:leading-[1.75rem] font-normal text-[#5F5764] align-self-start text-left"
            style={{ fontStyle: "normal" }}
          >
            Acreditamos no poder da comunidade. Cada doação garante um prato de
            comida, um curso de tecnologia ou o suporte para uma mulher
            recomeçar. Cada hora de voluntariado se transforma em conhecimento e
            esperança. Sua ajuda, seja como for, é o que mantém nossa revolução
            de amor em movimento.
          </p>

          <div className="flex flex-col tablet:flex-row items-start gap-[1rem] tablet:gap-[1.1875rem] w-full self-stretch">
            <a
              href="/quero-doar"
              className="flex justify-center items-center gap-[0.5rem] px-[1.25rem] py-[1rem] w-full tablet:flex-[1_0_0] 
              rounded-[0.5rem] bg-[#823DC7] text-[#FFF] text-[1rem] leading-[1.5rem] font-semibold font-inter 
              transition duration-300 hover:bg-[#6C2BB3]"
            >
              Quero doar
            </a>

            <button
              disabled
              className="flex justify-center items-center gap-[0.5rem] px-[1.25rem] py-[1rem] w-full tablet:flex-[1_0_0] 
              rounded-[0.5rem] border-[0.125rem] border-[#823DC7] text-[#823DC7] bg-[#F4F2F4] 
              text-[1rem] leading-[1.5rem] font-semibold font-inter cursor-default opacity-70"
            >
              Quero voluntariar
            </button>
          </div>
        </div>

        <div className="w-full tablet:max-w-[50%] mt-[2rem] tablet:mt-0">
          <Image
            src={floralFrameImage}
            alt="Imagem institucional decorada com moldura floral"
            className="object-cover w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default SobreNos;
