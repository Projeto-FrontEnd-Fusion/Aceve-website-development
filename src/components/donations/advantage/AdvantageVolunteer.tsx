import { IoMdHappy } from "react-icons/io";
import { MdHub } from "react-icons/md";
import { LuTreePalm } from "react-icons/lu";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdOutlineCampaign } from "react-icons/md";

export function AdvantagesVolunteer() {
  const contentAdvantages = [
    {
      icon: <LuTreePalm size={24} />,
      tittle: "Desenvolvimento Pessoal",
      description:
        "Ganhe novas habilidades e experiências valiosas que podem enriquecer sua vida pessoal e profissional, além de aumentar seu conhecimento sobre questões sociais.",
    },
    {
      icon: <MdHub size={24} />,
      tittle: "Rede de Contatos",
      description:
        "Amplie sua rede de contatos, conheça pessoas com interesses e valores semelhantes, e fortaleça sua conexão com a comunidade.",
    },
    {
      icon: <IoMdHappy size={24} />,
      tittle: "Satisfação Pessoal",
      description:
        "Experimente a gratificação pessoal de fazer a diferença na vida de outras pessoas e de contribuir para mudanças positivas na sociedade.",
    },
    {
      icon: <BsGlobeAmericas size={24} />,
      tittle: "Impacto Social",
      description:
        "Veja o impacto real e positivo do seu trabalho nas vidas das mulheres e na comunidade como um todo, reforçando a importância da sua contribuição.",
    },
    {
      icon: <MdOutlineCampaign size={24} />,
      tittle: "Visibilidade e Reconhecimento",
      description:
        "Receba reconhecimento pelo seu trabalho voluntário, que pode ser uma adição valiosa ao seu currículo e à sua experiência de vida.",
    },
  ];

  return (
    <section className="py-8 px-5 flex flex-col items-center bg-white-smooth gap-4">
      <h2 className="text-xl text-[#222222] text-center font-bold leading-[120%]">
        Vantagens de fazer voluntariado em nossa ONG
      </h2>
      {contentAdvantages.map((data) => (
        <>
          <div className="flex items-center gap-4 p-5 shadow-xl bg-white-normal rounded-lg">
            <div className="p-2 rounded-full bg-yellow-normal">{data.icon}</div>
            <p className="text-xs leading-[150%] text-gray-normal">
              <span className="text-xs font-roboto font-bold leading-[120%]">
                {data.tittle}:
              </span>
              <br />
              {data.description}
            </p>
          </div>
        </>
      ))}
    </section>
  );
}
