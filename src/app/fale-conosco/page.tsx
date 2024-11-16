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
            <section className="bg-beige-normal">
                <div  className="flex flex-col items-center px-5 lg:px-[81px] py-8 lg:py-20 lg:w-[1280px] lg:mx-auto">
                    <h1 className="uppercase font-roboto font-bold text-lg lg:text-[40px] mb-4">fale conosco</h1>
                    <p className="font-roboto text-base text-[#444444] lg:text-lg mb-6 lg:mb-16">Compartilhe sua ideia, inspire a ação</p>
                    <div className="flex flex-col items-center justify-between lg:gap-8 lg:flex-row w-full mt-4lg:mt-16">
                        <div className="relative h-[193px] w-[262px] lg:min-w-[470px] lg:h-[547px]">
                            <Image
                                fill
                                src={bannerTalkToUs}
                                alt="Imagem de pessoas sendo amparadas"
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <TalkToUsForm />
                    </div>
                </div>
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