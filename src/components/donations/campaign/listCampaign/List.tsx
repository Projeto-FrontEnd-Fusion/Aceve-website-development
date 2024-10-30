import clsx from "clsx";

interface Data {
  ImageSrc: string;
  CampaignTittle: string;
  CampaignDescription: string;
}

const ListItem = clsx(
  "flex w-full gap-4 bg-white-smooth shadow rounded-lg max-w-96 self-center"
);

const ListItemImg = clsx("rounded w-24");

const ListItemContainer = clsx("flex flex-col gap-3 p-2");

const ListItemContainerTittle = clsx(
  "font-roboto font-bold text-sm leading-[120%] text-black"
);

const ListItemContainerParagraph = clsx(
  "font-roboto font-normal text-xs text-gray-normal leading-[150%]"
);

export function ListCampaign(Data: Data) {
  return (
    
      <li className={ListItem}>
        <img src={Data.ImageSrc} className={ListItemImg} />
        <div className={ListItemContainer}>
          <h3 className={ListItemContainerTittle}>{Data.CampaignTittle}</h3>
          <p className={ListItemContainerParagraph}>
            {Data.CampaignDescription}
          </p>
        </div>
      </li>
  );
}
