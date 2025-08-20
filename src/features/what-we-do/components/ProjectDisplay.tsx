import Image from "next/image"
import teste from "../../../assets/BannerImg.png"

export const ProjectsDisplay = () => {
    return (
        <section className="laptop:max-w-[1220px] max-desktop:max-w-[1536px] m-auto">
            <div className="flex gap-10">
                <div className="w-3/5 h-full flex flex-col justify-center">
                    <div className="gap-10">
                        <h3>PROJETOS</h3>
                        <h2>As Violetas</h2>
                    </div>
                    <div className="gap-10">
                            <p>Acolhe mulheres com medidas protetivas e em extrema vulnerabilidade social. Oferece atendimento com assistente social e psicólogas, workshops, palestras, dinâmicas, apresentações e rodas de conversa (coletivas e individuais) sobre violência doméstica. Atua em rede com serviços como  União Brasileira dos Estudantes Secundaristas (UBES), Delegacia de Defesa da Mulher (DDM) e Guarda Civil Metropolitana (GCM).</p>
                        
                        <div className="px-4">
                            <ul className="">
                                <li className="list-disc"><span className="font-bold">Público Alvo:</span> Mulheres e adolescentes(15 a 65+ anos)</li>
                                <li className="list-disc"><span className="font-bold">Atendimento:</span>Terças, quintas e domingos</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="w-full h-full">
                    <figure className="">
                        <Image alt="Imagem de pessoas reunidas que fazem parte da ONG"
                            
                            width={731}
                            height={614}
                            src={teste} />
                    </figure>
                </div>
            </div>
        </section>
    )
}