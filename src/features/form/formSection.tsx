import Image from "next/image";
import voluntarioimg from "@/assets/voluntarioimg.png";
export default function FormSection() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary-100 px-4 text-center font-inter">
      <h1 className="text-primary-800 font-semibold text-2xl md:text-4xl">
        Seja a Mudança que o Mundo Precisa
      </h1>
      <p className="mt-4 text-grey-800 font-normal text-base md:text-lg max-w-xl">
        Seja voluntário(a) e ajude a transformar vidas com a gente. Inscreva-se
        e comece hoje mesmo a mudar o mundo ao seu redor!
      </p>
      <Image
        src={voluntarioimg}
        alt="Imagem institucional decorada com moldura floral"
        className="object-cover self-center justify-self-center w-[65%] desktop:w-auto desktop:h-[680px] desktop:py-14 h-auto max-w-full transition-all duration-500 row-start-2 desktop:row-start-1 desktop:col-start-2 desktop:row-span-3"
      />
      <form>formulário aqui</form>
    </main>
  );
}
