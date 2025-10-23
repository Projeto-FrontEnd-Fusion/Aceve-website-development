import Image from "next/image";
import bannerImage from "@/assets/banner-what-we-do.png";

export default function BannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative flex flex-col items-start gap-1 h-[37.125rem] px-4 tablet:px-8 desktop:px-10 py-[2.6875rem] z-20">
        <div className="absolute inset-0 -z-10 bg-black/10 bg-blend-overlay">
          <Image
            src={bannerImage}
            alt="Atividades com voluntários"
            fill
            priority
            className="
            mix-blend-overlay
              object-cover
              object-[center_40%]
              tablet:object-[center_30%]
              desktop:object-[center_50%]
            "
          />
        </div>
        <h1
          className="
            text-grey-100 font-inter font-semibold
            text-[1.125rem] leading-[1.5rem] tracking-[-0.00563rem]              
            mobileSmall:text-[2.5rem] mobileSmall:leading-[2.875rem] mobileSmall:tracking-[-0.05rem] 
            desktop:text-[3.11581rem] desktop:leading-[3.739rem] desktop:tracking-[-0.04675rem]    
            max-w-4xl
          "
        >
          Cuidar, capacitar, transformar
        </h1>
        <h2
          className="
            text-primary-100 font-inter font-semibold
            text-[0.875rem] leading-[1.25rem] tracking-[-0.00938rem]  
            mobileSmall:text-[1.5rem] mobileSmall:leading-[1.875rem] mobileSmall:tracking-[-0.015rem] 
            desktop:text-[1.8695rem] desktop:leading-[2.49263rem] desktop:tracking-[-0.00938rem]     
            max-w-3xl
          "
        >
          Conheça nossas ações e projetos
        </h2>
      </div>
    </section>
  );
}
