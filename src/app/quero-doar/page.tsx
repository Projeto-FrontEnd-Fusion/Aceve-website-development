import { DonationOptions } from "@/components/DonationOptions/DonationOptions";
import { ReactNode } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdComputer, MdOutlineDiversity1 } from "react-icons/md";
import { FiBox } from "react-icons/fi";

interface IimpactData {
  icon: ReactNode;
  subTittle: string;
  about: string;
}

const impactList: IimpactData[] = [
  {
    icon: <FaRegHeart size={24} color="#823DC7" />,
    subTittle: "Acolhimento de Mulheres",
    about:
      "Atendimento social, rodas de conversa, apoio jurídico e orientação com psicólogas",
  },
  {
    icon: <MdComputer size={24} color="#823DC7" />,
    subTittle: "Capacitação de jovens",
    about:
      "Cursos gratuitos de tecnologia (robótica, Arduino, redes) para inclusão produtiva.",
  },
  {
    icon: <MdOutlineDiversity1 size={24} color="#823DC7" />,
    subTittle: "Apoio a crianças e adolescentes",
    about:
      "Oficinas, esportes, acompanhamento psicológico e atividades educativas no contraturno escolar.",
  },
  {
    icon: <FiBox size={24} color="#823DC7" />,
    subTittle: "Ações Humanitárias",
    about:
      "Distribuição de cestas básicas, gás de cozinha, leite e kits de higiene para famílias em situação crítica.",
  },
];

function QueroDoar() {
  return (
    <main
      className="flex flex-col min-h-screen bg-[#FAF6FE] items-center py-8
      px-4 mobileXLarger:px-8 laptop:px-[72px]"
    >
      <div className="flex flex-col tablet:w-full tablet:gap-8 items-center">
        <div className="flex flex-col w-full items-center tablet:items-start">
          <h1 className="text-[40px] text-[#663198] text-xl font-bold tablet:text-[40px]">
            Doações e Arrecadações
          </h1>
          <p className="text-lxl text-[#5F5764] mt-2  pb-8 tablet:pt-5">
            Sua doação financia ações sociais que acolhem, cuidam e empoderam
            mulheres, crianças e jovens em situação de vulnerabilidade nas
            favelas da Zona Sul de São Paulo.
          </p>
        </div>

        <section
          className="flex py-6 flex-col items-center gap-5
        w-full desktop:w-[65%]
        md:rounded-2xl md:shadow-[1px_1px_4px_rgba(52,52,52,0.2)]
        md:bg-white-normal"
        >
          <h2 className="text-[#663198] font-montserrat font-semibold text-sm min-[430px]:text-base sm:text-xl md:text-2xl">
            Como sua doação faz diferença
          </h2>

          <ul
            className="w-full gap-6 flex flex-col pb-5
        tablet:px-8 tablet:py-4
        tablet:grid tablet:grid-rows-2 tablet:grid-cols-2"
          >
            {impactList.map(({ about, icon, subTittle }, index) => (
              <li
                key={index + 1}
                className="w-fit flex flex-col gap-1 tablet:mx-auto"
              >
                <h3 className="flex font-semibold gap-2 text-[#5F5764] text-xs leading-5 items-center  min-[430px]:text-sm md:text-[14px] md:text-[#A5A1A8]">
                  {icon}
                  {subTittle}
                </h3>
                <p className="w-full text-[#1E1E1F] text-xs leading-5 min-[430px]:text-sm">
                  {about}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          className="flex flex-col items-center justify-center w-full gap-5 tablet:gap-10 
        bg-[#FAF6FE] tablet:bg-[#fff] tablet:rounded-[16px] 
        tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-full desktop:w-[65%]
        md:shadow-[1px_1px_4px_rgba(52,52,52,0.2)]"
        >
          <h2
            className="text-[24px] text-[#663198] font-montserrat font-semibold
          text-sm min-[430px]:text-base sm:text-xl md:text-2xl"
          >
            Escolha o valor da sua doação
          </h2>

          <DonationOptions />
        </section>
      </div>
    </main>
  );
}

export default QueroDoar;
