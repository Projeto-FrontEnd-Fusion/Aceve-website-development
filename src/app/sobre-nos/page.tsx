"use client";
import TheViolets from "@/assets/theViolets.png";
import VivaLeite from "@/assets/Vivaleite.png";
import floralFrameImage from "@/assets/changemaker.png";
import Viotec from "@/assets/Viotec.png";
import Kime from "@/assets/Kime.png";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useState } from "react";
import { ImpactfulStories } from "@/features/about-us/components/ImpactfulStories";
import { AboutUs } from "@/features/about-us/components/sobre-nos";

function SobreNos() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  
  const whatWeDo = [
    {
      title: "As Violetas",
      content:
        "O Projeto As Violetas acolhe mulheres e adolescentes em situação de extrema vulnerabilidade, oferecendo apoio psicológico e social em um ambiente seguro. Por meio de rodas de conversa, workshops e dinâmicas, o projeto promove reflexões sobre violência doméstica e fortalece redes de apoio. Atua também em parceria com serviços públicos para garantir proteção e acesso a direitos.",
      alt: "Foto que mostra o funcionamento do projeto As Violetas",
      image: TheViolets,
    },
    {
      title: "VIVALEITE",
      content:
        "O Projeto VIVALEITE, da Associação Violeta Eliz, promove semanalmente a entrega de leite a crianças e idosos em situação de vulnerabilidade. Beneficiando 50 moradores, a iniciativa garante segurança alimentar, acolhimento e dignidade à comunidade.",
      alt: "Foto que mostra o funcionamento do projeto VIVALEITE",
      image: VivaLeite,
    },
    {
      title: "Viotec",
      content:
        "O Projeto Viotec capacita jovens do Morro da Mandioca e arredores para o mercado de tecnologia, oferecendo formação prática em áreas como redes, robótica e Arduino. Além da qualificação técnica, promove autoestima, criatividade e inclusão, ajudando os participantes a construir seus projetos de vida.",
      alt: "Foto que mostra o funcionamento do projeto VIOTEC",
      image: Viotec,
    },
    {
      title: "Kime",
      content:
        "O Projeto Kime une karatê e psicanálise para promover o desenvolvimento integral de crianças e adolescentes. A iniciativa fortalece corpo, mente e vínculos sociais por meio das artes marciais e rodas de conversa, oferecendo um espaço seguro de escuta e empoderamento.",
      alt: "Foto que mostra o funcionamento do projeto Kime",
      image: Kime,
    },
  ];

  return (
    <main className="flex flex-col">
      <AboutUs/>

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
      <section className="py-6 px-4 gap-4 flex flex-col max-w-lg justify-center items-center min-[526px]:mx-auto">
        <h3 className="font-semibold text-2xl tracking-[1%] text-[#A468E4]">
          Um olhar sobre o que fazemos
        </h3>
        <nav className="w-full">
          <div className="flex justify-between">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="px-4 py-3 transition duration-300 hover:bg-[#cecece60] rounded-lg"
            >
              <FaArrowLeft
                size={20}
                className="cursor-pointer text-[#A5A1A8] "
              />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              className="px-4 py-3 transition duration-300 hover:bg-[#cecece60] rounded-lg"
            >
              <FaArrowRight
                size={20}
                className="cursor-pointer text-[#A5A1A8] "
              />
            </button>
          </div>
        </nav>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          className="w-full"
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {whatWeDo.map(({ content, image, title, alt }, index) => {
            console.log(index);
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4">
                  <h4 className="text-[#823DC7]  font-semibold text-lg tracking-[-0.5%] md:hidden">
                    {title}
                  </h4>
                  <Image src={image} alt={alt} className="w-full  aspect-[4/3]" />
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[#823DC7]  font-semibold text-lg tracking-[-0.5% max-md:hidden">
                      {title}
                    </h4>
                    <p className={`text-[#2A272C] text-sm`}>{content}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <ImpactfulStories />
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
