import { VacaciesEvents } from "./boxEvents/Events";
import clsx from "clsx";

const sectionVolunteer = clsx(
  "px-5 py-8 flex flex-col items-center gap-7 bg-white-smooth"
);

const sectionVolunterTitle = clsx(
  "text-xl text-[#222222] font-bold leading-[120%]"
);

const sectionVolunterParagraph = clsx(
  "font-roboto font-light leading-[150%] text-gray-normal text-center"
);

export function VolunteerVacancies() {
  return (
    <section className="flex flex-col items-center px-5 py-8 gap-7 bg-white-smooth">
      <h2 className={sectionVolunterTitle}>VAGAS DE VOLUNTARIADO</h2>
      <p className={sectionVolunterParagraph}>
        Faça parte de projetos sociais e ajude dezenas de mulheres a viver com
        dignidade.
      </p>
      <div className="flex flex-col gap-5 px-5">

        <div className="flex flex-col md:flex-row gap-8 ">
          {[...Array(3)].map(() => (
            <VacaciesEvents
              descriptionEvent="Tenha experiência em pesquisa e elaboração de projetos para editais. Com uma política de participação e colaboração, então você não estará sozinho(a)."
              adressEvent="Rua 12 de Outubro, 33 - Jardim Maria Rita, São Paulo - SP, Brasil. Complemento: Favela Morro da Mandioca"
              workModality="Remoto"
              title="Vagas para criação de projetos"
              avaliable = {true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
