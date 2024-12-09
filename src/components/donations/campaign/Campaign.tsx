import { Button } from "@/components/button/GlobalButton";
import clsx from "clsx";
import {ReactNode } from "react";


interface Data{
    ListCampaings: ReactNode;
}


const ContainerSection = clsx("flex flex-col items-center gap-10 px-2 py-5");

const ContainerSectionTittle = clsx(
  "text-xl text-[#222222] font-bold leading-[120%]"
);




export function Campaings(Data: Data) {
  return (
    <section className={ContainerSection}>
      <h2 className={ContainerSectionTittle}>CAMPANHAS</h2>

      {Data.ListCampaings}

      <Button
        children="VER TODOS"
        Background="transparent"
        fontColor="purple"
        size="normal"
        className="text-sm font-medium border-2 border-purple-light rounded-md px-6 py-2 md:px-16"
      />
    </section>
  );
}
