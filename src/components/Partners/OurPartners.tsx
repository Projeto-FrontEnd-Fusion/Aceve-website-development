import Image, { StaticImageData } from "next/image";

import LogoCeA from "@/public/InstitutoCeA.png";
import LogoRemimo from "@/public/RemimoEcojoias.png";
import LogoBrecholeta from "@/public/BrecholetaVioletaEliz.png";

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
    <section className="py-12 flex flex-col gap-8 bg-[#FAF6FE]">
      <h2 className="max-mobileLarger:text-lg text-3xl font-bold text-[#54287B] uppercase">
        parceiros
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
