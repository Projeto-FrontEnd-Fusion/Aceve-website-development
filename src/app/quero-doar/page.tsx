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
    <main className="flex flex-col min-h-screen bg-[#FAF6FE] items-center gap-8 py-8
      px-4 mobileMicro:px-8 mobileMini:px-16 mobileSmall:px-20 mobileLarger:px-30 mobileXLarger:px-36 tablet:px-8 laptop:px-32 desktop:px-0
    ">
      <section className="flex py-6 flex-col items-center gap-5
        w-full desktop:w-[60%]
        md:rounded-2xl md:shadow-[1px_1px_4px_rgba(52,52,52,0.2)]
        md:bg-white-normal">
        <h2 className="text-[#663198] font-montserrat font-semibold text-sm min-[430px]:text-base sm:text-xl md:text-2xl">
          Como sua doação faz diferença
        </h2>

        <ul className="w-full gap-6 flex flex-col 
        tablet:px-8 tablet:py-4
        tablet:grid tablet:grid-rows-2 tablet:grid-cols-2 ">
          {impactList.map(({ about, icon, subTittle }, index) => (
            <li key={index + 1} className="w-full flex flex-col gap-1">
              <h3 className="flex font-semibold gap-2 text-[#5F5764] text-xs leading-5 items-center min-[430px]:text-sm md:text-[14px] md:text-[#A5A1A8]">
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
        className="flex flex-col items-center justify-center w-full gap-[40px]  
        bg-[#FAF6FE] tablet:bg-[#fff] tablet:rounded-[16px] 
        tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-full desktop:w-[60%]
        md:shadow-[1px_1px_4px_rgba(52,52,52,0.2)]"

      >
        <h2 className="text-[24px] text-[#663198] font-montserrat font-semibold
          text-sm min-[430px]:text-base sm:text-xl md:text-2xl">
          Escolha o valor da sua doação
        </h2>

        <DonationOptions />
      </section>
    </main>
  );
}

export default QueroDoar;
