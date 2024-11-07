import React from "react";
import { Button } from "../button/GlobalButton";

import { whoweareDetailsExpanded as data } from "@/model/whoweare";

const HeroSectionWhoWeAre = () => {
  return (
    <section className="bg-white-smooth px-5 text-gray-normal">
      <h1 className="text-lg font-bold uppercase text-center md:text-start my-10 md:text-[40px] md:font-montserrat md:normal-case">
        {data.title1}
      </h1>
      <section className=" flex flex-col-reverse md:flex-row">
        <div>
          <p className="py-8 md:py-0">
            Fundada em 2014, na favela Morro da Mandioca, a Violeta Eliz é uma
            associação sem fins econômicos, com a finalidade principal de
            promover <span className="font-bold md:font-normal">ações de caráter educacional, cultural, de assistência
            social e de cidadania.</span> Entre suas atividades, destacam-se a
            <span className="font-bold md:font-normal">capacitação profissional gratuita</span> e a <span className="font-bold md:font-normal">integração de jovens e adultos
            ao mercado de trabalho.</span>
          </p>
          <h2 className="font-bold uppercase text-gray-dark text-center">
            {data.title2}
          </h2>
          <p className="py-8">{data.p2}</p>
          <h2 className="font-bold uppercase text-gray-dark text-center">
            {data.title3}
          </h2>
          <p className="py-8">{data.p3}</p>
        </div>
        <div>
          <img
            src={data.imgSrc}
            alt={data.imgAlt}
            className="shadow-lg rounded-lg"
          />
          <p className="hidden md:block italic font-roboto">
            {data.imgSubTitle}
          </p>
          <Button
            size="small"
            Background="purple"
            fontColor="white"
            className="hidden md:block"
          >
            {data.action}
          </Button>
        </div>
      </section>
    </section>
  );
};

export default HeroSectionWhoWeAre;
