import React from "react";
import { whowearePartnersDetails as data } from "@/model/whoweare";

const Partners = () => {
  return (
    <section
      className="text-center text-gray-dark font-roboto py-6
    tablet:py-20"
    >
      <h2 className="text-[40px] font-bold text-center uppercase tablet:normal-case">
        {data.title}
      </h2>
      <p className="px-7 max-w-2xl mx-auto">
        {data.description}
      </p>
      <ul
        className="flex justify-center gap-16 items-center pt-8
      tablet:gap-14"
      >
        {data.partnersList.map((partner) => (
          <li key={partner.name}>
            <img
              alt={partner.alt}
              src={partner.imgUrl}
              className="max-h-16"
              title={partner.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
