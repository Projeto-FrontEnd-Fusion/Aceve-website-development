import TalkToUsForm from "@/components/TalkToUs/TalkToUsForm";
import bannerTalkToUs from "@/public/banner-fale-conosco.webp"
import Image from "next/image";
import { MdLocalPhone, MdEmail, MdLocationOn, MdOpenInNew } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import AtadosIcon from "@/public/atados-icon.svg"
import AuroraSocialIcon from "@/public/aurora-social-icon.svg"
import { contacts } from "../_constants/contacts";
import ContactItem from "@/components/TalkToUs/ContactItem";

const TalkToUS = () => {
    return ( 
        <main>
            <section className="flex flex-col items-center px-5 py-8 gap-4 bg-beige-normal">
                <h1 className="uppercase font-roboto font-bold text-lg">fale conosco</h1>
                <p className="font-roboto text-base text-[#444444]">Compartilhe sua ideia, inspire a ação</p>
                <div className="relative h-[193px] w-[262px]">
                    <Image alt="Imagem de pessoas sendo amparadas" src={bannerTalkToUs} fill className="object-cover rounded-lg" />
                </div>
                <TalkToUsForm />
            </section>

            <section className="flex flex-col items-center px-5 py-8 gap-4">
                <h1 className="uppercase font-roboto font-bold text-lg">entre em contato</h1>
                <div className="space-y-8">
                    {
                        contacts.map(contact => (
                            <ContactItem
                                key={contact.contactType}
                                contactType={contact.contactType}
                                contactValue={contact.contactValue}
                                iconUrl={contact.iconUrl}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col items-center px-5 py-8 gap-4 bg-beige-normal">
                <h1 className="uppercase font-roboto font-bold text-lg">acompanhe <span className="text-[#855CA3]">violeta eliz</span></h1>

                <div className="w-[212px] space-y-10">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="h-[95.2px] w-[95.2px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <FaFacebookF size={32} />
                        </div>
                        <h3 className="font-bold text-preto-bunker text-base font-roboto">Facebook</h3>
                        <p className="font-roboto text-sm">Acompanhe-nos através do Facebook também!</p>
                        <a href="#">
                            <button className="flex items-center gap-3 px-[22.4px] py-[11.2px] bg-[#482E98] rounded-[5.6px] text-white-normal transition-colors duration-300 hover:bg-[#855CA3]">
                                <span className="font-medium">Acessar</span>
                                <MdOpenInNew size={18} />
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="h-[95.2px] w-[95.2px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <FaXTwitter size={32} />
                        </div>
                        <h3 className="font-bold text-preto-bunker text-base font-roboto">X (Twitter)</h3>
                        <p className="font-roboto text-sm">Acompanhe-nos através do X (Twitter) também!</p>
                        <a href="#">
                            <button className="flex items-center gap-3 px-[22.4px] py-[11.2px] bg-[#482E98] rounded-[5.6px] text-white-normal transition-colors duration-300 hover:bg-[#855CA3]">
                                <span className="font-medium">Acessar</span>
                                <MdOpenInNew size={18} />
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="h-[95.2px] w-[95.2px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <FaLinkedin size={32} />
                        </div>
                        <h3 className="font-bold text-preto-bunker text-base font-roboto">LinkedIn</h3>
                        <p className="font-roboto text-sm">Acompanhe-nos através do LinkedIn também!</p>
                        <a href="#">
                            <button className="flex items-center gap-3 px-[22.4px] py-[11.2px] bg-[#482E98] rounded-[5.6px] text-white-normal transition-colors duration-300 hover:bg-[#855CA3]">
                                <span className="font-medium">Acessar</span>
                                <MdOpenInNew size={18} />
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="h-[95.2px] w-[95.2px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <Image src={AtadosIcon} alt="Ícone do Atados" className="h-[95px]" />
                        </div>
                        <h3 className="font-bold text-preto-bunker text-base font-roboto">Atados</h3>
                        <p className="font-roboto text-sm">Saiba mais sobre nossas vagas de voluntariado!</p>
                        <a href="#">
                            <button className="flex items-center gap-3 px-[22.4px] py-[11.2px] bg-[#482E98] rounded-[5.6px] text-white-normal transition-colors duration-300 hover:bg-[#855CA3]">
                                <span className="font-medium">Acessar</span>
                                <MdOpenInNew size={18} />
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="h-[95.2px] w-[95.2px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <Image src={AuroraSocialIcon} alt="Ícone da Aurora Social" className="h-[95px]" />
                        </div>
                        <h3 className="font-bold text-preto-bunker text-base font-roboto">Aurora Social</h3>
                        <p className="font-roboto text-sm">Venha saber mais sobre nossos projetos em andamento!</p>
                        <a href="#">
                            <button className="flex items-center gap-3 px-[22.4px] py-[11.2px] bg-[#482E98] rounded-[5.6px] text-white-normal transition-colors duration-300 hover:bg-[#855CA3]">
                                <span className="font-medium">Acessar</span>
                                <MdOpenInNew size={18} />
                            </button>
                        </a>
                    </div>            
                </div>
            </section>
        </main>
     );
}
 
export default TalkToUS;