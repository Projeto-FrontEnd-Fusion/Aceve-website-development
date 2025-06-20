import Image from "next/image";
import { HeaderSection } from "../Header";
import LogoCeA from "@/public/InstitutoCeA.png";
import LogoRemimo from "@/public/RemimoEcojoias.png";
import LogoBrecholeta from "@/public/BrecholetaVioletaEliz.png";

export const UsPartners = () => {
  const patnesImg = [
    {
      name: "Instituto c&a",
      icon: LogoCeA,
    },
    {
      name: "Remimo",
      icon: LogoRemimo,
    },
    {
      name: "Brecholeta",
      icon: LogoBrecholeta,
    },
  ];
  return (
    <section className="py-12 flex flex-col gap-8">
      <HeaderSection title="PARCEIROS" />
      <div className="flex justify-center gap-8 items-center max-mobileLarger:flex-col md:gap-20">
        {patnesImg.map(({ name, icon }) => (
          <figure>
            <Image src={icon} className="max-w-30" alt={`Logo ${name}`} />
          </figure>
        ))}
      </div>
    </section>
  );
};
