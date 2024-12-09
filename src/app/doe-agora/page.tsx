"use client";
import clsx from "clsx";
import { Collections } from "@/components/donations/collections/Collection";
import { Campaings } from "@/components/donations/campaign/Campaign";
import { ListCampaign } from "@/components/donations/campaign/listCampaign/List";
import { VolunteerVacancies } from "@/components/donations/vacancies/Vacancies";
import { Subscribe } from "@/components/donations/subscribe/Subscribe";
import { AdvantagesVolunteer } from "@/components/donations/advantage/AdvantageVolunteer";

interface ImagesTypes {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  description: string;
}

const images: ImagesTypes = {
  imageOne:
    "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/10e101f2-edcc-45c8-a865-cc91ccee1719.png",
  imageTwo:
    "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/fd500285-e0ef-4015-9b95-f21d54a9bfe0.png",
  imageThree:
    "https://files.edgestore.dev/nh2rz4kiwkl7w411/publicImages/_public/post/d0d9d2b3-127c-44a4-ae8d-274648e4c89e.png",
  description: "Fotos da Associação Cultural e Educacional Violeta Eliz",
};

const List = clsx("flex flex-col gap-5 w-full");

function doeAgora() {
  return (
    <main className="w-full flex flex-col bg-beige-normal">
      <div className="flex w-full box-border ">
        <img
          className={clsx("w-1/3 max-h-[130px] md:max-h-[280px]")}
          src={images.imageOne}
          alt={images.description}
        />
        <img
          className={clsx("w-1/3 max-h-[130px] md:max-h-[280px]")}
          src={images.imageTwo}
          alt={images.description}
        />
        <img
          className={clsx("w-1/3 max-h-[130px] md:max-h-[280px]")}
          src={images.imageThree}
          alt={images.description}
        />
      </div>

      <Collections />

      <VolunteerVacancies />
      <Subscribe />

      <AdvantagesVolunteer />
    </main>
  );
}

export default doeAgora;
