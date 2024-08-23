import { whoweareDetails } from "@/model/whoweare";
import { Button } from "../button/GlobalButton";
import { FaArrowRight } from "react-icons/fa6";

import clsx from "clsx";
import { ImgSectionWhoWeAre } from "./ImgSection";
import { HeaderSectionWhoweAre } from "./Header";
import { ParagraphSection } from "./Paragraph";

export const Whoweare = () => {
  return (
    <>
      <section
        className={clsx(
          "flex-col gap-2 pb-10",
          "laptop:w-1/2 ml-auto laptop:relative laptop:pt-16 laptop:items-start"
        )}
      >
        <HeaderSectionWhoweAre />
        <ParagraphSection />
      </section>
    </>
  );
};
