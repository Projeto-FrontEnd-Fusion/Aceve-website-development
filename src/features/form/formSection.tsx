import Image from "next/image";
import voluntarioimg from "@/assets/voluntarioimg.png";
export default function FormSection() {
  return (
    <main className="min-h-screen bg-primary-100 px-4 py-12 font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <h1 className="text-primary-800 font-semibold text-2xl md:text-5xl">
            Seja a Mudança que o Mundo Precisa
          </h1>
          <p className="text-grey-600 font-normal text-sm md:text-base max-w-md">
            Seja voluntário(a) e ajude a transformar vidas com a gente.
            Inscreva-se e comece hoje mesmo a mudar o mundo ao seu redor!
          </p>
          <Image
            src={voluntarioimg}
            alt="Imagem institucional decorada com moldura floral"
            className="hidden md:block object-cover w-[50%] md:w-[40%] lg:w-full h-auto transition-all duration-500"
          />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl shadow-lg p-6">
            <p>Formulário aqui</p>
          </div>
        </div>
      </div>
    </main>
  );
}
