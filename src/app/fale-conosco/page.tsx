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
                <div className="flex flex-col items-center px-5 lg:px-[81px] py-8 lg:py-20 w-[350px] lg:w-[1280px] mx-auto">
                    <h1 className="uppercase font-roboto font-bold text-lg lg:text-[40px] lg:font-montserrat mb-4">fale conosco</h1>
                    <p className="font-roboto text-base text-[#444444] lg:text-lg mb-6 lg:mb-16">Compartilhe sua ideia, inspire a ação</p>
                    <div className="flex flex-row flex-wrap items-center justify-center lg:justify-between lg:gap-8 w-full mt-4lg:mt-16">
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

            <section className="flex flex-col items-center px-5 py-8 lg:py-20 gap-4 lg:gap-16 w-[350px] lg:w-[1280px] mx-auto">
                <h1 className="uppercase font-roboto font-bold text-lg lg:font-montserrat lg:text-[40px]">entre em contato</h1>
                <div className="flex flex-col lg:justify-center w-full lg:flex-row gap-8 lg:gap-[97px]">
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

            <section className="bg-beige-normal">
                <div className="flex flex-col items-center px-5 lg:px-[81px] py-8 lg:py-20 w-[350px] lg:w-[1280px] mx-auto">
                    <h1 className="uppercase font-roboto font-bold text-lg lg:text-[40px] lg:font-montserrat">acompanhe <span className="text-[#855CA3]">violeta eliz</span></h1>

                    <div className="flex flex-row flex-wrap justify-center gap-10 lg:gap-[97px] mt-8 lg:mt-16 transition-all duration-500">
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
                </div>
            </section>
        </main>
     );
}
 
export default TalkToUS;