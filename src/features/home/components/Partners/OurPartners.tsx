import Image, { StaticImageData } from "next/image";

import LogoCeA from "@/assets/InstitutoCeA.png";
import LogoRemimo from "@/assets/RemimoEcojoias.png";
import LogoBrecholeta from "@/assets/BrecholetaVioletaEliz.png";

type Partner = {
  name: string;
  icon: StaticImageData;
};

export const OurPartners = () => {
  const patnesImg: Partner[] = [
    { name: "Instituto c&a", icon: LogoCeA },
    { name: "Remimo", icon: LogoRemimo },
    { name: "Brecholeta", icon: LogoBrecholeta },
  ];

  return (
    <section className="py-12 flex flex-col gap-8 bg-primary-100">
      <h2 className="max-mobileLarger:text-lg text-3xl font-bold text-primary-800 uppercase self-center">
         Apoiadores
      </h2>
      <div className="flex justify-center gap-8 items-center max-mobileLarger:flex-col md:gap-20">
        {patnesImg.map(({ name, icon }) => (
          <figure key={name}>
            <Image src={icon} className="max-w-30" alt={`Logo ${name}`} />
          </figure>
        ))}
      </div>
    </section>
  );
};
