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
            <div className="h-[72px] min-w-[72px] bg-[#EEAA44] rounded-full flex justify-center items-center">
                <Image src={iconUrl} alt={contactType} className="h-[95px]" />
            </div>
            <div className="text-base flex flex-col justify-center gap-4">
                <p className="font-bold">{contactType}</p>
                <p>{contactValue}</p>
            </div>
        </div>
     );
}
 
export default ContactItem;