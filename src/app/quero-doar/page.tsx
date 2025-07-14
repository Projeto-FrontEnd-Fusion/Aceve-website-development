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
    icon: <FiBox size={24} color="#823DC7" />,
    subTittle: "Ações Humanitárias",
    about:
      "Distribuição de cestas básicas, gás de cozinha, leite e kits de higiene para famílias em situação crítica.",
  },
  {
    icon: <MdOutlineDiversity1 size={24} color="#823DC7" />,
    subTittle: "Apoio a crianças e adolescentes",
    about:
      "Oficinas, esportes, acompanhamento psicológico e atividades educativas no contraturno escolar.",
  },
];

function QueroDoar() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF6FE] items-center gap-8">
      <h1>Quero Doar</h1>
      <section className="flex px-8 py-6 flex-col items-center gap-5 w-fit md:rounded-2xl md:shadow-[1px_1px_4px_rgba(52,52,52,0.2)] md:bg-white-normal">
        <h2 className="text-[#663198] font-montserrat font-semibold text-sm min-[430px]:text-base sm:text-xl md:text-2xl">
          Como sua doação faz diferença
        </h2>

        <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap md:max-w-2xl md:justify-center md:gap-10">
          {impactList.map(({ about, icon, subTittle }, index) => (
            <li key={index + 1} className="flex flex-col gap-1">
              <h3 className="flex font-semibold gap-2 text-[#5F5764] text-xs leading-5 items-center min-[430px]:text-sm md:text-base">
                {icon}
                {subTittle}
              </h3>
              <p className="text-[#1E1E1F] max-w-60 text-xs leading-5 min-[430px]:text-sm  min-[430px]:max-w-72">
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
        tablet:w-[85%] desktop:w-[60%]"
      >
        <h2 className="text-[24px] text-[#663198] font-semibold">
          Escolha o valor da sua doação
        </h2>

        <DonationOptions />
      </section>
    </main>
  );
}

export default QueroDoar;
