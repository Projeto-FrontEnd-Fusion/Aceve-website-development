'use client'
import Image, { StaticImageData } from "next/image";
import Violetas from "../../../assets/as-violetas.png";
import Brecholeta from "../../../assets/brecholeta.png";
import Justiceiras from "../../../assets/justiveiras.png";
import Kime from "../../../assets/kime.png";
import Viotec from "../../../assets/viotec.png";
import Vivaleite from "../../../assets/vivaleite.png";

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";




export const ProjectsDisplay = () => {

    interface IProjectData {
        title: string,
        description: string,
        image: StaticImageData,
        data?: {
            public: string,
            days: string,
        }
    }


    const projectData: IProjectData[] = [
        {
            title: "As Violetas",
            description: "Acolhe mulheres com medidas protetivas e em extrema vulnerabilidade social. Oferece atendimento com assistente social e psicólogas, workshops, palestras, dinâmicas, apresentações e rodas de conversa (coletivas e individuais) sobre violência doméstica. Atua em rede com serviços como  União Brasileira dos Estudantes Secundaristas (UBES), Delegacia de Defesa da Mulher (DDM) e Guarda Civil Metropolitana (GCM).",
            image: Violetas,
            data: {
                public: "mulheres e adolescentes (15 a 65+ anos)",
                days: "Terças, quintas e domingos",
            }
        },
        {
            title: "Vivaleite",
            description: "O Projeto Vivaleite garante segurança alimentar para crianças de até 6 anos e idosos a partir de 60 anos em situação de vulnerabilidade, distribuindo semanalmente 4 litros de leite para cada um dos 50 beneficiários cadastrados – sendo 33 crianças e 17 idosos. A iniciativa oferece não apenas um alimento essencial ao crescimento e à saúde, mas também um momento de acolhimento e cuidado, fortalecendo vínculos e promovendo dignidade dentro da comunidade.",
            image: Vivaleite,
            data: {
                public: "Crianças de até 6 anos e idosos a partir de 60 anos",
                days: "Terças-feiras, das 9h às 11h",
            }
        },
        {
            title: "Viotec",
            description: "O Viotec é um projeto de capacitação tecnológica voltado para jovens da favela onde a ONG está inserida e comunidades vizinhas, oferecendo formação prática em áreas como terminologia, redes, robótica e Arduino, além de palestras sobre inteligência emocional e respeito às mulheres. Com o objetivo de preparar esses jovens para o mercado de trabalho e ampliar suas perspectivas profissionais, o projeto incentiva o desenvolvimento de talentos e o protagonismo juvenil.",
            image: Viotec,
            data: {
                public: "Jovens de 14 a 29 anos",
                days: "Sábados, das 9h às 12h",
            }
        },
        {
            title: "Projeto Kime",
            description: "O Projeto Kime – Karatê e Psicanálise – é uma iniciativa que combina arte marcial e rodas de conversa para promover o desenvolvimento físico, emocional e social de crianças e adolescentes. Por meio do karatê, as participantes trabalham disciplina, foco e autoestima, enquanto os encontros de psicanálise estimulam o diálogo, a inteligência emocional e o bem-estar. Essa integração fortalece a autoconfiança, incentiva o respeito ao próximo e contribui para a formação de cidadãos mais conscientes.",
            image: Kime,
            data: {
                public: "Crianças e adolescentes de 6 a 15 anos",
                days: "Quartas-feiras - 6 a 9 anos: das 8h às 12h - 12 a 15 anos: das 13h às 17h",
            }
        },
        {
            title: "Brecholeta",
            description: "O Brecholeta é um negócio social criado pela Violeta Eliz em parceria com o Instituto C&A, que une sustentabilidade e impacto social. O projeto recebe doações de roupas e acessórios com pequenas avarias, que são cuidadosamente selecionados e revendidos a preços acessíveis. Todo o lucro das vendas é revertido para financiar as atividades da ONG, cobrindo despesas essenciais como água, luz, aluguel e parte da equipe. Além de contribuir para a manutenção dos projetos sociais, o Brecholeta também gera oportunidade de trabalho e renda — hoje emprega uma mãe solo venezuelana, que encontrou no projeto a chance de recomeçar sua vida no Brasil.",
            image: Brecholeta,

        },
        {
            title: "As justiceiras",
            description: "O Projeto Justiceiras atua de forma online para oferecer apoio multidisciplinar a mulheres em situação de violência, conectando-as a uma rede de acolhimento composta por profissionais de diversas áreas. A iniciativa conta com atendimento jurídico, psicológico, socioassistencial e médico, garantindo orientação e suporte de maneira integrada e humanizada. Por meio dessa articulação, o projeto busca não apenas amparar as vítimas em momentos de crise, mas também fortalecer sua autonomia e segurança para que possam reconstruir suas vidas com dignidade.",
            image: Justiceiras,
        }
    ]

    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const slideTo = (index: number) => {
        swiperInstance?.slideTo(index, 300);
    };

    return (
        <section className="m-auto gap-5 w-full md:rounded-2xl  md:bg-white-normal ">
            <div className="flex flex-col flex-wrap relative">
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
                    className="w-full max-md:max-w-lg"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {projectData.map(({ title, description, image, data }) => {
                        return (
                            <SwiperSlide key={title}>
                                <div className="flex justify-between m-auto w-full">
                                    <div className="max-w-[460px] flex flex-col justify-between ml-[3.8rem]">
                                        <div className="pt-16">
                                            <h2 className="font-inter font-semibold text-[1.125rem] text-grey-500">PROJETOS</h2>
                                            <h3 className="text-[2.5rem] font-bold font-inter text-primary-800 leading-[3rem]">{title}</h3>
                                        </div>
                                        <div className="w-full ">
                                            <p className="text-base gap-2  text-grey-600 ">
                                                {description}
                                            </p>
                                            {data ? <ul className="list-disc text-grey-600 pl-4 pt-6">
                                                <li className="text-base text-grey-600 "><span className="font-bold">Público Alvo</span>: {data?.days}</li>
                                                <li className="text-base text-grey-600 "><span className="font-bold">Atendimento</span>: {data?.public}</li>
                                            </ul> : null}

                                        </div>
                                    </div>
                                    <div>
                                        <figure>
                                            <Image src={image} alt={title} className="w-[731px]"/>
                                        </figure>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <nav className="w-full md:py-6 max-md:max-w-lg">
                    <div className="flex justify-between ">
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="px-4 py-3 transition duration-150 absolute top-[43%] left-[0,5%] z-10 rounded-lg"
                        >
                            <FaAngleLeft size={25} className="cursor-pointer text-primary-500" />
                        </button>

                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="px-4 py-3 transition duration-150 active:text-grey-500 rounded-lg"
                        >
                            <FaAngleRight size={25} className="cursor-pointer absolute top-[43%] right-[1%] z-20 text-white-smooth" />
                        </button>
                    </div>
                    <ul className="w-full flex justify-center items-center gap-2 max-md:hidden ">
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
                                    <button className={`w-2 h-2 active:bg-primary-500 bg-grey-500 rounded-full ${index === activeIndex ? "text-primary-500" : " text-grey-500"}`}></button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    )
}