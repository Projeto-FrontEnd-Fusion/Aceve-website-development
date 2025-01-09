import { areasofactivity } from "@/config/activity";
import { HeaderSection } from "../Header";

export const Activity = () => {
  return (
    <section
      className="w-full py-8 ml-auto mr-auto flex flex-col gap-8 justify-center items-center  bg-beige-normal select-none 
      desktop:h-[667px]
      mobileLarger:py-20
      
    "
    >
      <HeaderSection
        title="Áreas de atuação"
        sub="Juntos, podemos fazer a diferença, descubra mais sobre como atuamos"
      />
      <section
        className=" flex
        tablet:w-[768px]
        tablet:overflow-x-auto
        desktop:w-[1280px]
        scrool-activity
        "
      >
        <div
          className="flex flex-col gap-8 px-2 
      mobileSmall:px-4
      tablet:flex-row
    
      "
        >
          {areasofactivity.map(({ title, describe, img }, index) => (
            <article
              key={index}
              className="flex bg-white-normal rounded-md shadow-md
              tablet:w-[632px] tablet:h-[350px]
              cursor-pointer
            "
            >
              <figure className="flex-1">
                <img src={img} alt={describe} className="" />
              </figure>
              <div
                className="flex-1 px-2 flex flex-col justify-center gap-2
            mobileSmall:px-4
            "
              >
                <h2
                  className="font-semibold text-preto-bunker leading-4
              mobileSmall:text-[1.2rem]
              "
                >
                  {title}
                </h2>
                <p
                  className="text-[.7rem] text-preto-bunker/80 
              mobileSmall:text-[1rem]
              tablet:text-[1.2rem]
              "
                >
                  {describe}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};
