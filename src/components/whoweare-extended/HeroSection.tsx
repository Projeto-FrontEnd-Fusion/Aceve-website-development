import React from "react";
import { Button } from "../button/GlobalButton";

import { whoweareDetailsExpanded as data } from "@/model/whoweare";

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
        <ValuesSection />
        <ImageSection />
      </section>
    </section>
  );
};

const ImageSection = () => {
  return (
    <div
      className="w-full
        tablet:w-[70%] tablet:flex tablet:flex-col tablet:items-center"
    >
      <div
        className="flex flex-col items-center 
        mobileLarger:px-20
        tablet:pt-10
        laptop:pt-0"
      >
        <img
          src={data.imgSrc}
          alt={data.imgAlt}
          className="w-full shadow-lg rounded-lg h-48 
            tablet:h-[304px]
            xl:max-w-[470px] 
          "
        />
        <p className="hidden tablet:block text-center text-sm italic font-roboto mt-2">
          {data.imgSubTitle}
        </p>
      </div>

      <div className="hidden tablet:block tablet:mt-6 ">
        <Button Background="purple" size="small" fontColor="white">
          {data.action}
        </Button>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <p className="mb-10 tablet:py-0 ">
        Fundada em 2014, na favela Morro da Mandioca, a Violeta Eliz é uma
        associação sem fins econômicos, com a finalidade principal de promover{" "}
        <span className="font-bold">
          ações de caráter educacional, cultural, de assistência social e de
          cidadania.
        </span>{" "}
        Entre suas atividades, destacam-se a
        <span className="font-bold">capacitação profissional gratuita</span> e a{" "}
        <span className="font-bold">
          integração de jovens e adultos ao mercado de trabalho.
        </span>
      </p>
      <div>
        <h2 className="tablet:text-2xl font-bold uppercase text-gray-dark text-center tablet:text-start tablet:normal-case mb-4">
          {data.title2}
        </h2>
        <p className="mb-10">{data.p2}</p>
      </div>
      <div>
        <h2 className="tablet:text-2xl font-bold uppercase text-gray-dark text-center tablet:text-start tablet:normal-case mb-4">
          {data.title3}
        </h2>
        <p>{data.p3}</p>
      </div>
    </div>
  );
};

export default HeroSectionWhoWeAre;
