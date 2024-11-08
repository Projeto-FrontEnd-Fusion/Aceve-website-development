import React from "react";

import { whoweareWorks as data } from "@/model/whoweare";

const WorksSectionWhoWeAre = () => {
  return (
    <section className="bg-beige-normal font-roboto text-center pt-8">
      <ul className="flex flex-col gap-6 px-5 ">
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
    <li className="flex flex-col items-center gap-4">
      <div className="size-20 p-5 rounded-full bg-yellow-normal flex items-center justify-center">
        <img src={work.workImage} alt={work.title} className="" />
      </div>
      <h3 className="font-bold">{work.title}</h3>
      <p className="px-5">{work.description}</p>
    </li>
  );
};

export default WorksSectionWhoWeAre;
