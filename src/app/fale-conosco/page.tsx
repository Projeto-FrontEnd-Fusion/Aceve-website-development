import TalkToUsForm from "@/components/TalkToUs/TalkToUsForm";
import bannerTalkToUs from "@/public/banner-fale-conosco.webp"
import Image from "next/image";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

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
                    <div className="flex gap-4 items-center">
                        <div className="h-[72px] min-w-[72px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <MdLocalPhone size={24} />
                        </div>
                        <div className="text-base flex flex-col justify-center gap-4">
                            <p className="font-bold">Número de Telefone</p>
                            <p>(11) 98293-5150</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="h-[72px] min-w-[72px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <MdEmail size={24} />
                        </div>
                        <div className="text-base flex flex-col justify-center gap-4">
                            <p className="font-bold">E-mail</p>
                            <p>eliz_social@outlook.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="h-[72px] min-w-[72px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                            <MdLocationOn size={24} />
                        </div>
                        <div className="text-base flex flex-col justify-center gap-4">
                            <p className="font-bold">Endereço</p>
                            <p className="text-wrap">Rua Ricardo Julio Ferraz, 357/367 - São Paulo</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default TalkToUS;