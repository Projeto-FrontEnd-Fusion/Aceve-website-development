import Image from "next/image";
import React from "react";

interface ContactItemProps {
    iconUrl: string
    contactType: string
    contactValue: string
}

const ContactItem = ({ iconUrl, contactType, contactValue }: ContactItemProps) => {
    return ( 
        <div className="flex gap-4 items-center">
            <div className="h-[72px] lg:h-24 min-w-[72px] lg:min-w-24 bg-[#EEAA44] rounded-full flex justify-center items-center transition-all duration-500">
                <Image src={iconUrl} alt={contactType} className="size-6 lg:size-8" />
            </div>
            <div className="text-base flex flex-col justify-center gap-4">
                <p className="font-bold lg:text-xl transition-all duration-500">{contactType}</p>
                <p className="text-wrap">{contactValue}</p>
            </div>
        </div>
     );
}
 
export default ContactItem;