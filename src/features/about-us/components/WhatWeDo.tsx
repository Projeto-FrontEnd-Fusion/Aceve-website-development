import TheViolets from "@/assets/theViolets.png";
import VivaLeite from "@/assets/Vivaleite.png";
import Viotec from "@/assets/Viotec.png";
import Kime from "@/assets/Kime.png";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useState } from "react";

export const WhatWeDo = () => {
  const whatWeDoArray = [
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
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slideTo = (index: number) => {
    swiperInstance?.slideTo(index, 300);
  };

  return (
    <section className="py-6 px-4 gap-4 w-full flex flex-col max-md:max-w-lg justify-center items-center min-[526px]:mx-auto md:px-8 md:gap-6 desktop:px-[4.5rem]">
      <h3 className="font-semibold text-2xl tracking-[1%] text-[#A468E4] flex md:self-start  md:text-[40px] md:leading-10 md:tracking-[-2%] md:font-bold">
        Um olhar sobre o que fazemos
      </h3>
      <nav className="w-full  md:mb-6">
        <div className="flex justify-between md:hidden">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="px-4 py-3 transition duration-300 hover:bg-[#cecece60] rounded-lg"
          >
            <FaArrowLeft size={20} className="cursor-pointer text-[#A5A1A8] " />
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
        <ul className="w-full flex gap-7 max-md:hidden">
          {whatWeDoArray.map(({ title }, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  slideTo(index);
                  setActiveIndex(index);
                }}
                className={`font-semibold text-lg tracking-[-0.5%]  cursor-pointer transition-colors duration-300  ${
                  index === activeIndex
                    ? "text-[#54287B]"
                    : "text-[#A5A1A8] hover:text-[#54287b81]"
                } `}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </nav>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        speed={300}
        spaceBetween={20}
        breakpoints={{
          1024: {
            simulateTouch: false,
          },
        }}
        className="w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={setSwiperInstance}
      >
        {whatWeDoArray.map(({ content, image, title, alt }) => (
          <SwiperSlide key={title}>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
              <h4 className="text-[#823DC7]  font-semibold text-lg tracking-[-0.5%] md:hidden">
                {title}
              </h4>
              <Image
                src={image}
                alt={alt}
                className="w-full  md:max-w-2xl  aspect-[4/3] md:flex md:self-center lg:max-w-md "
              />
              <div className="flex flex-col gap-4 md:max-w-2xl md:self-center lg:self-end ">
                <h4 className="text-[#823DC7]  font-semibold text-lg tracking-[-0.5%] max-md:hidden md:text-3xl md:tracking-[-1.5%]">
                  {title}
                </h4>
                <p className={`text-[#2A272C] text-sm`}>{content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
