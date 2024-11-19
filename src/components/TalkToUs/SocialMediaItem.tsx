import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";

interface SocialMediaItemProps {
    iconUrl: string
    socialMediaName: string
    text: string
    socialMediaLink: string
}

const SocialMediaItem = ({ iconUrl, socialMediaName, text, socialMediaLink }: SocialMediaItemProps) => {
    return ( 
        <div className="flex flex-col items-center gap-4 text-center w-[212px] lg:w-[308px]">
            <div className="size-[95.2px] lg:size-[136px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                <Image src={iconUrl} alt={socialMediaName} className="size-8 lg:size-12 transition-all duration-500" />
            </div>
            <h3 className="font-bold text-preto-bunker text-base font-roboto lg:text-xl transition-all duration-500">{socialMediaName}</h3>
            <p className="font-roboto text-sm lg:text-[16px] transition-all duration-500">{text}</p>
            <a href={socialMediaLink}>
                <button className="flex items-center gap-3 px-[22.4px] py-[11.2px] bg-[#482E98] rounded-[5.6px] text-white-normal transition-colors duration-300 hover:bg-[#855CA3]">
                    <span className="font-medium">Acessar</span>
                    <MdOpenInNew size={18} />
                </button>
            </a>
        </div>
     );
}
 
export default SocialMediaItem;