import { Button } from "@/components/button/GlobalButton";
import clsx from "clsx";

interface data {
  descriptionEvent: string;
  adressEvent: string;
  workModality: "Remoto" | "híbrido" | "presencial";
  imageEvent?: string;
  altimageEvent?: string;
  title?: string;
  avaliable?: boolean;
}


const divEvents = clsx("flex flex-col gap-5 py-4 relative shadow-md md:max-w-[380px]")
const EventsDescription = clsx("font-roboto font-light text-sm leading-[150%] text-gray-normal py-2")
const EventsAdress = clsx("font-roboto font-extralight text-xs leading-[150%] text-gray-normal py-2")
const EventsWorkModality = clsx("font-roboto self-start font-bold text-[10px] leading-[150%] text-purple-logo w-fit py-1 border-t-2 border-purple-logo")

export function VacaciesEvents(dataEvent: data) {
  return (
    <div className={divEvents}>
      <img
        className={clsx("w-80 h-40 rounded-lg ")}
        src={dataEvent.imageEvent ?? "https://i.ibb.co/yWwZnsj/NoImage.png"}
        alt={dataEvent.altimageEvent}
      />
      <div className="px-4 my-2">
        <h3 className="font-roboto font-bold leading-[120%] text-[#222222]">
          {dataEvent.title}
        </h3>
        {dataEvent.avaliable
          ?
          <span className="text-red-600 font-bold">
            Encerrada
          </span>
          :
          null}
        <p className={EventsDescription}>
          {dataEvent.descriptionEvent}
        </p>
        <p className={EventsAdress}>
          {dataEvent.adressEvent}
        </p>
        <span className={EventsWorkModality}>
          {dataEvent.workModality}
        </span>
        <Button
          children="Inscreva-se"
          Background="purple"
          fontColor="white"
          size="normal"
        />
      </div>
    </div>
  );
}
