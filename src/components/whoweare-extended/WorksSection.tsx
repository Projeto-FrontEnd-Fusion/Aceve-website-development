import React from "react";

import { whoweareWorks as data } from "@/model/whoweare";

const WorksSectionWhoWeAre = () => {
  return (
    <section className="bg-beige-normal font-roboto text-center py-8
    tablet:py-20">
      <ul className="flex flex-col gap-6 px-5 
      tablet:flex-row lg:px-[5%] tablet:justify-center
      desktop:px-[3%]">
        {data.map((work) => (
          <WorkItem key={work.title} work={work} />
        ))}
      </ul>
    </section>
  );
};

type WorkItemProps = {
  work: {
    title: string;
    description: string;
    workImage: string;
  }
}
const WorkItem = ({ work }: WorkItemProps) => {
  return (
    <li className="flex flex-col items-center gap-4 
    tablet:w-[308px]">
      <div className="size-20 p-5 rounded-full bg-yellow-normal flex items-center justify-center
      desktop:size-32">
        <img src={work.workImage} alt={work.title} className="" />
      </div>
      <h3 className="font-bold">{work.title}</h3>
      <p className="px-5 tablet:px-0">{work.description}</p>
    </li>
  );
};

export default WorksSectionWhoWeAre;
