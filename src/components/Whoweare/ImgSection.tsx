import { whoweareDetails } from "@/model/whoweare";
import clsx from "clsx";

export const ImgSectionWhoWeAre = () => {
  return (
    <div
      className={clsx(
        " flex justify-center items-center h-[300px]",
        "laptop:absolute laptop:translate-y-[90px] laptop:-translate-x-[480px] transition-transform duration-1000"
      )}
    >
      <figure className={clsx("translate-x-4 z-10")}>
        <img src={whoweareDetails.whoweareImg1} className="laptop:w-[220px]" />
      </figure>

      <figure className={clsx("-translate-x-4 translate-y-8")}>
        <img src={whoweareDetails.whoweareImg2} className="laptop:w-[220px]" />
      </figure>
    </div>
  );
};
