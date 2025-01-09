import { HeaderSection } from "../Header";

export const UsPartners = () => {
  const patnesImg = [
    {
      name: "instituto c&a",
      icon: "https://i.imgur.com/TCPvBub.png",
    },
    {
      name: "remimo",
      icon: "https://i.imgur.com/jDwCHNo.png",
    },
    {
      name: "brecholeta",
      icon: "https://i.imgur.com/tDEB4yF.png",
    },
  ];
  return (
    <section className="py-6 flex-col desktop:w-1/2 mx-auto desktop:py-20">
      <HeaderSection
        title="PARCEIROS"
        sub="Conheça os parceiros que caminham conosco: juntos, ampliamos horizontes e fortalecemos nossa missão"
      />
      <div className="flex justify-center gap-8 items-center my-8">
        {patnesImg.map(({ name, icon }) => (
          <figure>
            <img src={icon} alt={name} />
          </figure>
        ))}
      </div>
    </section>
  );
};
