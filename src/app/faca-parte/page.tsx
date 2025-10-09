import Image from "next/image";
import voluntarioimg from "@/assets/voluntarioimg.png";
import { VolunteerForm } from "@/features/volunteers/components/VolunteerForm/VolunteerForm";

export default function Voluntariar() {
  return (
<<<<<<< HEAD
    <section className="w-full min-h-[38.9rem] px-[18px] py-8 tablet:px-8 laptop:px-[4.5rem] font-inter bg-primary-100">
      <div className="flex flex-col laptop:flex-row laptop:gap-12 items-start h-full">
        <div className="w-full laptop:w-1/2 flex flex-col items-start text-left gap-2 py-6 laptop:py-8">
          <h1 className="text-[24px] tablet:text-[32px] desktop:text-[40px] text-primary-800 font-inter font-semibold leading-normal">
            Seja a Mudança que o Mundo Precisa
          </h1>
          <p className="text-grey-600 font-normal text-sm tablet:text-base desktop:text-xl max-w-lg">
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
=======
    <section className="min-h-screen bg-primary-100 py-12 px-6 font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 min-md:gap-16 items-center">
        <div className="flex flex-col items-center min-md:items-center lg:items-start text-justify min-md:text-center lg:text-left gap-8">
          <h1 className="text-primary-800 font-semibold text-3xl md:text-5xl leading-tight">
            Seja a Mudança que o Mundo Precisa
          </h1>
          <p className="text-grey-600 font-normal text-base md:text-lg max-w-lg">
            Seja voluntário(a) e ajude a transformar vidas com a gente.
            Inscreva-se e comece hoje mesmo a mudar o mundo ao seu redor!
          </p>
          <Image
            src={voluntarioimg}
            alt="Imagem institucional decorada com moldura floral"
            className="hidden md:block object-cover w-[60%] md:w-[50%] lg:w-full h-auto transition-all duration-500"
          />
        </div>

        <div className="w-full flex justify-center lg:justify-end h-full">
          <div className="w-full rounded-2xl shadow-lg h-full">
>>>>>>> 4a7c1fe0bf52eba90683acb612b53213853952dd
            <VolunteerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
