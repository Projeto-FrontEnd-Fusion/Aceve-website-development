import WhoWeAreImage1 from "@/assets/who-we-are-1.png"
import WhoWeAreImage2 from "@/assets/who-we-are-2.png"
import Image from "next/image"

export const WhoWeAre = () => {
  const textClass = "md:w-[80%] px-3 md:px-0"
  return (
    <section className="flex flex-col md:flex-row 
    w-full gap-y-4 p-6 md:p-0
    bg-primary-100">
      <div className="flex md:relative
      w-full md:w-[55%]
      md:h-[690px] lg:h-[690px] xl:h-[720px] 2xl:h-[760px]">
        <Image
          alt="Imagem de pessoas reunidas que fazem parte da ONG"
          className="md:absolute md:z-1 
        md:top-5 xl:top-[-10%]  
        md:right-[-2%]
        w-[90%] md:w-[405px] lg:w-[464px] xl:w-[598px] 2xl:w-[676px] 
        h-auto"
          src={WhoWeAreImage1} />
        <Image
          className="hidden md:block md:absolute md:z-2 
        md:bottom-[22%] lg:bottom-[10%] xl:bottom-[4%] 2xl:bottom-0 
        md:left-[-5%] lg:left-[9%] 2xl:left-[2%]
        md:w-[280px] lg:w-[321px] xl:w-[414px] 2xl:w-[490px]"
          alt="Imagem de pessoas reunidas que fazem parte da ONG"
          src={WhoWeAreImage2} />
      </div>
      <div className="flex flex-col items-start justify-center
      md:w-[45%]">
        <h2 className={`text-gray-700 text-2xl font-semibold uppercase
        ${textClass}`}>
          Quem somos
        </h2>
        <h3 className={`text-primary-600 text-3xl font-semibold
        ${textClass}`}>
          Da favela para o mundo: poder feminino em ação
        </h3>
        <p className={`text-lg ${textClass}`}>Somos uma ONG que apoia mulheres em situação de vulnerabilidade, promovendo autonomia econômica, habilidades socioemocionais e empreendedorismo. Acreditamos que fortalecer essas trajetórias é transformar famílias, comunidades e construir um mundo mais justo e acolhedor.</p>
      </div>
    </section>
  )
}
