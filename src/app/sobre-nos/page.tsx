import flowerBanner from "@/assets/sobre-nos-flores.png"
import Image from "next/image"

function SobreNos() {

    const paragraph1 = "A Associação Cultural e Educacional Violeta Eliz nasceu da história de superação da sua fundadora, Elizangela Maria dos Santos, que, após escapar de um ciclo de violência doméstica, decidiu transformar sua dor em propósito. Desde 2014, a ONG atua no Morro da Mandioca, na zona sul de São Paulo, fortalecendo mulheres, crianças e jovens em situação de vulnerabilidade por meio de educação, acolhimento, cultura, tecnologia e empreendedorismo."

    const paragraph2 = "Inspirada na coragem das guerreiras do cotidiano, a Violeta Eliz constrói redes de apoio e promove autonomia para que mais mulheres possam escrever novas histórias — livres da violência e cheias de possibilidades."

    return (
        <main className="w-full h-full m-auto">
            <section className="w-full min-h-[636px] my-[4.5rem] mx-[4.82rem]">
                <div className="flex items-stretch justify-center max-h-96">
                    <div className="max-w-[592px]">
                        <h2 className="font-inter font-semibold text-lg text-[#A5A1A8] ">SOBRE NÓS</h2>
                        <h3 className="font-inter font-bold text-[2.5rem] text-primary-600">De dor à transformação</h3>

                        <div className="py-4 ">
                            <p className="font-inter font-normal text-xl text-[#A5A1A8] pb-1">{paragraph1}</p>
                            <p className="font-inter font-normal text-xl text-[#A5A1A8]">{paragraph2}</p>
                        </div>
                    </div>
                    <div className="max-w-592px">
                        <figure>
                            <Image src={flowerBanner} alt="" className="max-h-[548px] max-w-[595px]" />
                            {/* <figcaption className="font-inter font-semibold text-sm text-primary-600">"O amor é um ato revolucionário." <span className="font-normal"> - Elizangela Maria dos Santos</span></figcaption> */}
                        </figure>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SobreNos