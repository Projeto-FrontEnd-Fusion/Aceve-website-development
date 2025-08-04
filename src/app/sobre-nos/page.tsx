"use client";
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
import { ImpactfulStories } from "@/features/about-us/components/ImpactfulStories";
import { AboutUs } from "@/features/about-us/components/sobre-nos";
import OurImpact from "@/features/about-us/components/OurImpact";
import { Changemaker } from "@/features/about-us/components/Changemaker";

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
      <AboutUs />
      <OurImpact />

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
                  <Image
                    src={image}
                    alt={alt}
                    className="w-full  aspect-[4/3]"
                  />
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
      <Changemaker />
    </main>
  );
}

export default SobreNos;
