import { whoweareDetails } from "@/model/whoweare";
import clsx from "clsx";
import { ImgSectionWhoWeAre } from "./ImgSection";

export const HeaderSectionWhoweAre = () => {
  return (
    <header
      className={clsx(
        "py-6 laptop:py-0 flex flex-col text-center",
        "laptop:flex-col laptop:text-left laptop:mb-8"
      )}
    >
      <h2 className={clsx("font-semibold text-[16px] font-roboto")}>
        {whoweareDetails.title}
      </h2>
      <h3
        className={clsx(
          "hidden text-[32px] font-roboto font-semibold",
          "laptop:flex text-[32px]",
          "desktop:text-[40px]"
        )}
      >
        {whoweareDetails.subtitle}
      </h3>
      <ImgSectionWhoWeAre />
    </header>
  );
};
