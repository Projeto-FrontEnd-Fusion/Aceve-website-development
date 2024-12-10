import React from "react";

import { whoweareDetailsExpanded as data } from "@/model/whoweare";
import { Button } from "@/components/button/GlobalButton";
import ValuesSection from "./ValuesSection";
import ImageSection from "./ImageSection";

const HeroSectionWhoWeAre = () => {
  return (
    <section
      className="bg-white-smooth px-5 text-gray-dark flex flex-col gap-10 transition-all duration-300
      tablet:px-20 
      lg:px-40"
    >
      <h1
        className="text-lg font-bold uppercase text-center 
        tablet:text-start mt-10  tablet:mt-20 tablet:text-[40px] tablet:font-montserrat tablet:normal-case"
      >
        {data.title1}
      </h1>

      <section
        className="flex flex-col-reverse gap-4 pb-20 
        tablet:justify-between tablet:items-center tablet:flex-col
        laptop:flex-row  laptop:items-stretch"
      >
        <ValuesSection data={data} />
        <ImageSection data={data as any} />
      </section>
    </section>
  );
};

export default HeroSectionWhoWeAre;
