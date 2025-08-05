import Image from "next/image";
import flowerBanner from "@/assets/sobre-nos-flores.png";

export const AboutUs = () => {

    const paragraph1 =
        "A Associação Cultural e Educacional Violeta Eliz nasceu da história de superação da sua fundadora, Elizangela Maria dos Santos, que, após escapar de um ciclo de violência doméstica, decidiu transformar sua dor em propósito. Desde 2014, a ONG atua no Morro da Mandioca, na zona sul de São Paulo, fortalecendo mulheres, crianças e jovens em situação de vulnerabilidade por meio de educação, acolhimento, cultura, tecnologia e empreendedorismo.";

    const paragraph2 =
        "Inspirada na coragem das guerreiras do cotidiano, a Violeta Eliz constrói redes de apoio e promove autonomia para que mais mulheres possam escrever novas histórias — livres da violência e cheias de possibilidades.";


        return (
        <section className="w-full m-auto p-4 tablet:my-16 tablet:px-8 desktop:my-[4.5rem] desktop:px-[4.82rem] desktop:max-w-[1280px]">

            <div className="relative">

                <div className="w-full flex flex-col tablet:items-start z-0">
                    <h2 className="font-inter font-semibold text-sm desktop:text-lg text-[#A5A1A8] mb-2 ">
                        SOBRE NÓS
                    </h2>
                    <h3 className="font-inter font-bold text-2xl desktop:text-[2.5rem] text-primary-600 ">
                        De dor à transformação
                    </h3>
                </div>

                <div className="flex flex-col-reverse  items-center tablet:flex-row tablet:items-start laptop:flex-row laptop:justify-between h-full
          desktop:flex-row desktop:justify-between">

                    <div className="tablet:w-[592px] z-40">
                        <div className="py-6 desktop:py-8 ">
                            <p className="font-inter font-normal text-sm tablet:text-base tablet:overflow-auto desktop:text-xl text-[#A5A1A8] mb-4">
                                {paragraph1}
                            </p>
                            <p className="font-inter font-normal text-sm tablet:text-base desktop:text-xl text-[#A5A1A8]">
                                {paragraph2}
                            </p>
                        </div>
                    </div>

                    <div className="py-6 tablet:py-0 tablet:h-full tablet:w-[590px]">
                        <figure className="tablet:absolute laptop:bottom-[-2rem] tablet:left-[20rem] laptop:left-[26rem] z-30 w-full">
                            <Image
                                src={flowerBanner}
                                alt="Elizangela Maria dos Santos"
                                className="tablet:max-w-[376px] laptop:max-w-[500px]"
                                width={592}
                                height={548}
                            />
                            <figcaption className="font-inter text-center font-semibold text-sm text-primary-600 tablet:text-center tablet:w-1/2 laptop:w-1/2">"O amor é um ato revolucionário." <span className="font-normal"> <span className="hidden laptop:inline">-</span> <br className="laptop:hidden" />Elizangela Maria dos Santos</span>
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </section>
    )
};