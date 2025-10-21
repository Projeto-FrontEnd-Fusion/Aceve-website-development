"use client";
import Image, { StaticImageData } from "next/image";
import Violetas from "../../../assets/projeto-as-violetas.jpeg";
import Brecholeta from "../../../assets/brecholeta.png";
import Justiceiras from "../../../assets/justiveiras.png";
import Kime from "../../../assets/kime.png";
import Viotec from "../../../assets/viotec.png";
import Vivaleite from "../../../assets/vivaleite.png";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";

export const ProjectsDisplay = () => {
  interface IProjectData {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    data?: {
      public: string;
      days: string;
    };
  }

  const projectData: IProjectData[] = [
    {
      id: 0,
      title: "As Violetas",
      description:
        "Acolhe mulheres com medidas protetivas e em extrema vulnerabilidade social. Oferece atendimento com assistente social e psicólogas, workshops, palestras, dinâmicas, apresentações e rodas de conversa (coletivas e individuais) sobre violência doméstica. Atua em rede com serviços como  União Brasileira dos Estudantes Secundaristas (UBES), Delegacia de Defesa da Mulher (DDM) e Guarda Civil Metropolitana (GCM).",
      image: Violetas,
      data: {
        public: "mulheres e adolescentes (15 a 65+ anos)",
        days: "Terças, quintas e domingos",
      },
    },
    {
      id: 1,
      title: "Vivaleite",
      description:
        "O Projeto Vivaleite garante segurança alimentar para crianças de até 6 anos e idosos a partir de 60 anos em situação de vulnerabilidade, distribuindo semanalmente 4 litros de leite para cada um dos 50 beneficiários cadastrados – sendo 33 crianças e 17 idosos. A iniciativa oferece não apenas um alimento essencial ao crescimento e à saúde, mas também um momento de acolhimento e cuidado, fortalecendo vínculos e promovendo dignidade dentro da comunidade.",
      image: Vivaleite,
      data: {
        public: "Crianças de até 6 anos e idosos a partir de 60 anos",
        days: "Terças-feiras, das 9h às 11h",
      },
    },
    {
      id: 2,
      title: "Viotec",
      description:
        "O Viotec é um projeto de capacitação tecnológica voltado para jovens da favela onde a ONG está inserida e comunidades vizinhas, oferecendo formação prática em áreas como terminologia, redes, robótica e Arduino, além de palestras sobre inteligência emocional e respeito às mulheres. Com o objetivo de preparar esses jovens para o mercado de trabalho e ampliar suas perspectivas profissionais, o projeto incentiva o desenvolvimento de talentos e o protagonismo juvenil.",
      image: Viotec,
      data: {
        public: "Jovens de 14 a 29 anos",
        days: "Sábados, das 9h às 12h",
      },
    },
    {
      id: 3,
      title: "Projeto Kime",
      description:
        "O Projeto Kime – Karatê e Psicanálise – é uma iniciativa que combina arte marcial e rodas de conversa para promover o desenvolvimento físico, emocional e social de crianças e adolescentes. Por meio do karatê, as participantes trabalham disciplina, foco e autoestima, enquanto os encontros de psicanálise estimulam o diálogo, a inteligência emocional e o bem-estar. Essa integração fortalece a autoconfiança, incentiva o respeito ao próximo e contribui para a formação de cidadãos mais conscientes.",
      image: Kime,
      data: {
        public: "Crianças e adolescentes de 6 a 15 anos",
        days: "Quartas-feiras - 6 a 9 anos: das 8h às 12h - 12 a 15 anos: das 13h às 17h",
      },
    },
    {
      id: 4,
      title: "Brecholeta",
      description:
        "O Brecholeta é um negócio social criado pela Violeta Eliz em parceria com o Instituto C&A, que une sustentabilidade e impacto social. O projeto recebe doações de roupas e acessórios com pequenas avarias, que são cuidadosamente selecionados e revendidos a preços acessíveis. Todo o lucro das vendas é revertido para financiar as atividades da ONG, cobrindo despesas essenciais como água, luz, aluguel e parte da equipe. Além de contribuir para a manutenção dos projetos sociais, o Brecholeta também gera oportunidade de trabalho e renda — hoje emprega uma mãe solo venezuelana, que encontrou no projeto a chance de recomeçar sua vida no Brasil.",
      image: Brecholeta,
    },
    {
      id: 5,
      title: "As justiceiras",
      description:
        "O Projeto Justiceiras atua de forma online para oferecer apoio multidisciplinar a mulheres em situação de violência, conectando-as a uma rede de acolhimento composta por profissionais de diversas áreas. A iniciativa conta com atendimento jurídico, psicológico, socioassistencial e médico, garantindo orientação e suporte de maneira integrada e humanizada. Por meio dessa articulação, o projeto busca não apenas amparar as vítimas em momentos de crise, mas também fortalecer sua autonomia e segurança para que possam reconstruir suas vidas com dignidade.",
      image: Justiceiras,
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slideTo = (index: number) => {
    swiperInstance?.slideTo(index, 300);
  };

  return (
    <section className="m-auto w-full md:rounded-2xl  md:bg-white-normal ">
      <div className="flex flex-col relative">
        <Swiper
          modules={[Navigation, EffectFade]}
          slidesPerView={1}
          speed={300}
          spaceBetween={20}
          autoHeight={true} // aqui ajusta automaticamente dentro do swiper
          breakpoints={{
            1024: {
              simulateTouch: false,
            },
          }}
          className="!w-full max-sm:max-w-lg"
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={setSwiperInstance}
        >
          {projectData.map(({ title, description, image, data }) => {
            return (
              <SwiperSlide
                key={title}
                className="h-auto" 
              >
                <div className="flex flex-col laptop:flex-row laptop:justify-between m-auto w-full">
                  <div className="flex flex-col justify-between laptop:ml-[3.8rem] laptop:max-w-[450px] sm:px-16 laptop:px-4">
                    <div className="pt-4 pb-6 sm:pt-8 sm:pb-0 laptop:pt-16 px-4">
                      <h2 className="font-inter font-semibold text-sm laptop:text-[1.125rem] text-grey-500">
                        PROJETOS
                      </h2>
                      <h3 className="font-inter font-bold text-2xl sm:text-3xl laptop:text-[2.5rem] text-primary-800 leading-[3rem]">
                        {title}
                      </h3>
                    </div>

                    <div className="w-full p-4">
                      <p className="laptop:text-base text-sm gap-2 text-grey-600 ">
                        {description}
                      </p>
                      {data ? (
                        <ul className="list-disc text-grey-600 pl-4 pt-6">
                          <li className="laptop:text-base text-grey-600 ">
                            <span className="font-bold text-base">
                              Público Alvo
                            </span>
                            : {data?.public}
                          </li>
                          <li className="laptop:text-base text-grey-600 ">
                            <span className="font-bold text-base">
                              Atendimento
                            </span>
                            : {data?.days}
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full flex justify-center laptop:justify-end mt-6 laptop:mt-0">
                    <figure className="relative w-full laptop:w-[731px] h-[300px] sm:h-[400px] laptop:h-[500px] overflow-hidden">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-[center_40%] tablet:object-[center_30%] desktop:object-[center_50%] transition duration-300 ease-in-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 731px"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <nav className="w-full sm:py-6 min-sm:max-w-lg flex items-center ">
          <div className="flex justify-between ">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="px-4 py-3 transition duration-150 absolute top-[33%] sm:top-[13%] laptop:top-[43%] laptop:left-[0,5%] z-10 rounded-lg "
            >
              <FaCircleChevronLeft
                size={30}
                className={`cursor-pointer max-mobileLarger:text-white-smooth text-grey-300 hover:cursor-pointer laptop:h-12 `}
              />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              className="px-4 py-3 transition duration-150 absolute top-[34%] right-[5%] sm:top-[13%] sm:right-[1%] laptop:top-[43%] laptop:right-[1%] z-20 rounded-lg"
            >
              <FaCircleChevronRight
                size={30}
                className={`cursor-pointer max-mobileLarger:text-white-smooth text-grey-500 hover:cursor-pointer laptop:h-12 `}
              />
            </button>
          </div>
          <ul className="w-full flex justify-center items-center gap-2 max-sm:py-4 ">
            {projectData.map(({ title }, index) => {
              return (
                <li
                  key={title}
                  onClick={() => {
                    slideTo(index);
                    setActiveIndex(index);
                  }}
                  className={`flex justify-center items-center cursor-pointer transition-colors duration-300'
                                         `}
                >
                  <button
                    className={`w-3 h-3 ${
                      activeIndex === index ? " bg-primary-500" : "bg-grey-500"
                    } focus:bg-primary-500 active:bg-primary-500 bg-grey-500 rounded-full ${
                      index === activeIndex
                        ? "text-primary-500"
                        : " text-grey-500"
                    }`}
                  ></button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};
