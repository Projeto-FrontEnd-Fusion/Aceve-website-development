import React from "react";
import { Button } from "../button/GlobalButton";

import { whoweareDetailsExpanded as data } from "@/model/whoweare";

const HeroSectionWhoWeAre = () => {
  return (
    <section className="bg-white-smooth px-5 text-gray-dark flex flex-col gap-10 md:px-20 lg:px-40">
      <h1 className="text-lg font-bold uppercase text-center md:text-start mt-10  md:mt-20 md:text-[40px] md:font-montserrat md:normal-case">
        {data.title1}
      </h1>

      <section className="flex flex-col-reverse md:flex-row md:justify-between gap-4 pb-8">
        <ValuesSection />
        <ImageSection />
      </section>
    </section>
  );
};

const ImageSection = () => {
  return (
    <div className=" w-full md:w-[70%] md:flex md:flex-col md:items-center">
      <div className="flex flex-col items-center">
        <img
          src={data.imgSrc}
          alt={data.imgAlt}
          className="shadow-lg rounded-lg xl:max-w-[470px]"
        />
        <p className="hidden text-center text-sm md:block italic font-roboto mt-2">
          {data.imgSubTitle}
        </p>
      </div>

      <div className="hidden md:block md:mt-6 ">
        <Button Background="purple" size="small" fontColor="white">
          {data.action}
        </Button>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  return (
    <div className="w-full">
      <p className="mb-10 md:py-0 ">
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
      <h2 className="md:text-2xl font-bold uppercase text-gray-dark text-center md:text-start md:normal-case mb-4">
        {data.title2}
      </h2>
      <p className="mb-10">{data.p2}</p>
      <h2 className="md:text-2xl font-bold uppercase text-gray-dark text-center md:text-start md:normal-case mb-4">
        {data.title3}
      </h2>
      <p>{data.p3}</p>
    </div>
  );
};

export default HeroSectionWhoWeAre;
