import { Button } from "../button/GlobalButton";
import { HeaderSection } from "../Header";

export const ImpactHistory = () => {
  const historys = [
    {
      name: "Renata",
      age: new Date().getFullYear() - 1991,
      img: "https://i.imgur.com/ehk4aFq.jpg",
      description:
        "A coragem de mudar veio junto com o apoio que ela nunca teve antes.",
      history: `Renata vivia um relacionamento abusivo há 10 anos, mas nunca teve coragem 
      de sair por falta de apoio financeiro e emocional. Após conhecer a Associação Violeta Eliz, 
      ela recebeu acolhimento, participou de oficinas de autoestima e cursos de capacitação 
      em confeitaria. Com a ajuda da associação, Renata conseguiu abrir seu próprio negócio 
      e agora é dona de uma pequena loja de bolos, sustentando seus dois filhos com dignidade 
      e independência.`,
    },
    {
      name: "Patrícia",
      age: new Date().getFullYear() - 2003,
      img: "https://i.imgur.com/rAvyzet.jpg",
      description:
        "Seu futuro estava pausado, até encontrar um lugar onde podia recomeçar.",
      history: `Patrícia foi vítima de violência sexual em sua adolescência, o que abalou sua 
      confiança e a fez abandonar os estudos. Na Violeta Eliz, ela encontrou apoio psicológico 
      e mentoria educacional. Hoje, com o incentivo da equipe, Patrícia concluiu o ensino médio 
      e conseguiu uma bolsa de estudos em psicologia. Seu sonho é ajudar outras mulheres que 
      passaram por situações semelhantes.`,
    },
    {
      name: "Ana",
      age: new Date().getFullYear() - 1979,
      img: "https://i.imgur.com/kFZf45g.jpg",
      description:
        "O luto quase a paralisou, mas o acolhimento a ajudou a renascer.",
      history: `Após perder o marido em um acidente, Ana ficou sem rumo, cuidando sozinha 
      de três filhos e enfrentando dificuldades financeiras. Na associação, ela encontrou 
      um espaço de acolhimento e escuta. Participou de um curso de artesanato e aprendeu 
      a produzir peças que hoje vende em feiras locais. Com o dinheiro, Ana conseguiu sustentar 
      sua família e, mais importante, encontrou uma nova razão para viver.`,
    },

    {
      name: "Clara",
      age: new Date().getFullYear() - 1967,
      img: "https://i.imgur.com/5FXseQs.jpg",
      description:
        "Quando tudo parecia perdido, ela descobriu que ainda podia recomeçar.",
      history: `Clara dedicou a vida inteira à família e nunca teve um emprego formal. 
      Após se divorciar, sentiu-se perdida e sem perspectiva de recomeçar. Na Violeta Eliz, 
      participou de rodas de conversa e um curso de costura, onde conheceu outras mulheres 
      na mesma situação. Com a ajuda da associação, Clara começou a costurar roupas para vender 
      e, aos poucos, reconstruiu sua autoconfiança e independência.`,
    },
  ];

  return (
    <section
      className="h-auto flex flex-col justify-center py-8
    mobileXLarger:py-12
    mobileLarger:px-12
    desktop:py-20
    "
    >
      <HeaderSection
        title="Histórias de Impacto"
        sub="Conheça algumas das histórias de mulheres apoiadas pela nossa ONG"
      />

      <div className=" flex gap-8 justify-center my-28 relative ">
        {historys.map(({ name, age, description, img, history }, index) => (
          <div
            key={index}
            className={`hover:scale-105 transition-all duration-700 ${
              index === 0 &&
              `absolute transform -top-12 left-1/2 -translate-x-1/2 z-50  
              desktop:relative desktop:top-0 desktop:left-0 desktop:translate-x-0
              
              `
            } ${index > 2 && "hidden desktop:flex"}`}
          >
            <figure
              className="w-[165px] aspect-11/20 relative overflow-hidden rounded-lg 
            mobileXLarger:w-[235px] mobileLarger:aspect-11/20
            mobileXLarger:rounded-xl
            "
            >
              <img src={img} alt={name} className="" />
              <div
                className="text-white-normal absolute z-30 w-full h-full flex 
              gap-4 flex-col justify-center items-center top-0 bg-gradient-to-t from-[#15052A]
               to-[#4A2595]/10 
               desktop:justify-end
               desktop:pb-4
               
               "
              >
                <h2 className="text-white-normal font-bold text-center desktop:text-[1.2rem]">
                  {name}, {age}
                </h2>
                <p
                  className="px-1 text-[.8rem] leading-3 text-center 
                mobileXLarger:text-[1.2rem] font-roboto mobileXLarger:leading-6
                mobileXLarger:px-4
                "
                >
                  "{description}"
                </p>
                <button className="w-28 bg-purple-light text-white-normal px-2 py-2 rounded-md mx-auto font-bold text-[.8rem]">
                  Ver historia
                </button>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};
