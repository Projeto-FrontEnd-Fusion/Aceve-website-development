import Image from "next/image";
import voluntarioimg from "@/assets/voluntarioimg.png";
import { VolunteerForm } from "@/features/volunteers/components/VolunteerForm/VolunteerForm";

export default function Voluntariar() {
  return (
    <section className="w-full min-h-[38.9rem] px-[18px] py-8 tablet:px-8 laptop:px-[4.5rem] font-inter bg-primary-100">
      <div className="flex flex-col laptop:flex-row laptop:gap-12 items-start h-full">
        <div className="w-full laptop:w-1/2 flex flex-col items-start text-left gap-2 py-6 laptop:py-8">
          <h1 className="text-[24px] tablet:text-[32px] desktop:text-[40px] text-primary-800 font-inter font-semibold leading-normal">
            Seja a Mudança que o Mundo Precisa
          </h1>
          <p className="text-grey-600 font-normal text-sm tablet:text-base desktop:text-xl max-w-lg text-justify">
            Seja voluntário(a) e ajude a transformar vidas com a gente.
            Inscreva-se e comece hoje mesmo a mudar o mundo ao seu redor!
          </p>
          <figure className="hidden laptop:block w-full relative">
            <Image
              src={voluntarioimg}
              alt="Imagem institucional decorada com moldura floral"
              className="object-cover w-full max-w-[595px] h-auto transition-all duration-500"
              priority
            />
          </figure>
        </div>
        <div className="w-full laptop:w-1/2 flex justify-center laptop:justify-end h-full">
          <div className="w-full rounded-2xl shadow-lg h-full bg-white px-4 py-6 tablet:px-6 tablet:py-8">
            <VolunteerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
