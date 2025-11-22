import AtividadesCulturais from "../../../assets/AtividadeCulturais.svg";
import AtendimentoPsicologico from "../../../assets/AtendimentoPsicologico.svg";
import CapacitacaoProfissional from "../../../assets/CapacitaçãoProfissional.svg";
import AcoesEmergenciais from "../../../assets/AçõesEmergenciais.svg";
import Image, { StaticImageData } from "next/image";

export const ServicesWeOffer = () => {
  interface InfosI {
    Icon: StaticImageData;
    about: string;
    alt: string;
  }
  const Infos: InfosI[] = [
    {
      Icon: AtividadesCulturais,
      about: "Atividades culturais e esportivas para jovens e crianças",
      alt: "Imagem sobre atividade culturais e esportivas",
    },
    {
      Icon: AtendimentoPsicologico,
      about: "Atendimento psicológico para crianças, jovens e mulheres",
      alt: "Imagem sobre atendimento psicológico para crianças, jovens e mulheres",
    },
    {
      Icon: CapacitacaoProfissional,
      about: "Capacitação profissional para mulheres",
      alt: "Imagem sobre a capacitação profissional para mulheres",
    },
    {
      Icon: AcoesEmergenciais,
      about: "Ações emergenciais: cestas, gás e itens essenciais",
      alt: "Imagem sobre as ações emergenciais sendo elas cestas, gás e itens essenciais",
    },
  ];

  return (
    <section className="bg-primary-100 px-4 py-8 md:px-8 lg:px-[4.5rem] lg:py-16">
      <div className=" flex flex-col gap-4 w-fit mx-auto">
        <h2 className="text-grey-500 text-sm text-center font-semibold font-inter lg:text-left lg:text-lg lg:tracking-[-0.5%]">
          SERVIÇOS QUE OFERTAMOS
        </h2>

        <ul className="flex flex-col items-center justify-center gap-10 lg:gap-[3.625rem] md:w-fit md:flex-row ">
          {Infos.map(({ Icon, about, alt }) => (
            <li
              className="flex flex-col items-center text-center md:max-w-40 gap-1 lg:max-w-56"
              key={about}
            >
              <Image src={Icon} alt={alt} className="md:w-20 lg:w-40 " />
              <p className="text-xs font-inter font-semibold text-grey-600 lg:text-sm">
                {about}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
