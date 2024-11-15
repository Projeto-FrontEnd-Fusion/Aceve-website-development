import React from "react";
import { whoweareInfoDetails as data } from "@/model/whoweare";
import Article from "./Article";
const InfoSectionWhoWeAre = () => {
  return (
    <section className="bg-white-smooth px-5 py-10 text-gray-normal laptop:px-40">
      <Article>
        <div className="tablet:order-2 *:tablet:text-end tablet:col-span-4 tablet:gap-4">
          <h3 className="info-h-3">{data.title1}</h3>
          <p className="px-2 tablet:p-0  ">{data.p1}</p>
        </div>

        <div className="tablet:order-1 tablet:row-span-2 tablet:col-span-2">
          <img
            className=" rounded-lg w-[90%] tablet:size-full mx-auto tablet:object-cover"
            src={data.img1}
            alt={data.imgDescription1}
            title={data.imgDescription1}
          />
        </div>

        <div
          className="flex flex-col gap-4 pb-6 tablet:col-span-4 
        tablet:order-3 *:tablet:text-end tablet:pb-0"
        >
          <h3 className="info-h-3">{data.title2}</h3>
          {data.p2.map((item) => (
            <p className="px-2 tablet:p-0 tablet:-my-2">{item}</p>
          ))}
        </div>
      </Article>

      <Article>
        <div
          className="tablet:order-2 tablet:row-span-2 tablet:col-span-2 desktop:max-h-[250px]
        "
        >
          <img
            className=" rounded-lg w-[90%] tablet:size-full mx-auto tablet:object-cover"
            src={data.img2}
            alt={data.imgDescription2}
            title={data.imgDescription2}
          />
        </div>

        <div
          className="flex flex-col gap-4 pb-6 tablet:col-span-4
        tablet:order-1 tablet:pb-0"
        >
          <h3 className="info-h-3">{data.title3}</h3>
          {data.p3.map((item) => (
            <p className="px-2 tablet:p-0 last:tablet:-my-4">{item}</p>
          ))}
        </div>
      </Article>
    </section>
  );
};

export default InfoSectionWhoWeAre;
