import { whoweareDetails } from "@/model/whoweare";
import clsx from "clsx";
import { Button } from "../button/GlobalButton";
import { FaArrowRight } from "react-icons/fa6";

export const ParagraphSection = () => {
  return (
    <>
      <article
        className={clsx(
          "py-12 px-6 font-roboto text-gray-normal flex flex-col gap-4 text-[16px]",
          "tablet:px-16",
          "laptop:px-0 laptop:pr-20 laptop:py-0 laptop:gap-6"
        )}
      >
        <p className="leading-6">{whoweareDetails.p1}</p>
        <p className="leading-6">{whoweareDetails.p2}</p>
        <p className="leading-6">{whoweareDetails.p3}</p>
        <div
          className={clsx(
            "grid place-content-center transition-transform duration-1000",
            "tablet:grid laptop:place-content-start tablet:mt-8"
          )}
        >
          <Button
            size="small"
            backgroundColor="purple"
            fontColor="white"
            icon={<FaArrowRight />}
          >
            {whoweareDetails.action}
          </Button>
        </div>
      </article>
    </>
  );
};
