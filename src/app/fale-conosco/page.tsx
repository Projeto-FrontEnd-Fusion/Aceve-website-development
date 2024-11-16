import TalkToUsForm from "@/components/TalkToUs/TalkToUsForm";
import bannerTalkToUs from "@/public/banner-fale-conosco.webp"
import Image from "next/image";
import { contacts } from "../_constants/contacts";
import ContactItem from "@/components/TalkToUs/ContactItem";
import { socialMedia } from "../_constants/social-media";
import SocialMediaItem from "@/components/TalkToUs/SocialMediaItem";

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
                    {
                        socialMedia.map(socialMediaItem => (
                            <SocialMediaItem
                                key={socialMediaItem.socialMediaName}
                                socialMediaName={socialMediaItem.socialMediaName}
                                text={socialMediaItem.text}
                                socialMediaLink={socialMediaItem.socialMediaLink}
                                iconUrl={socialMediaItem.iconUrl}
                            />
                        ))
                    }           
                </div>
            </section>
        </main>
     );
}
 
export default TalkToUS;