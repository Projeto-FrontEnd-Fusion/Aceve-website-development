import { whoweareDetails } from "@/model/whoweare";
import { Button } from "../button/GlobalButton";
import clsx from "clsx";

export const Whoweare = () => {
  return (
    <>
      <section className=" flex-col gap-2 pb-10">
        <h2 className="font-semibold text-[18px] font-roboto text-center py-6">
          {whoweareDetails.title}
        </h2>

        <section className=" flex">
          <article className=" flex justify-center items-center h-[200px] mobileMicro:h-[220px]">
            <figure className={clsx("translate-x-4 z-10")}>
              <img src={whoweareDetails.whoweareImg1} />
            </figure>

            <figure className={clsx("-translate-x-4 translate-y-8")}>
              <img src={whoweareDetails.whoweareImg2} className="w-full" />
            </figure>
          </article>
          <article
            className={clsx(
              "py-12 px-6 font-roboto text-gray-600 flex flex-col gap-4 ",
              "tablet:bg-green-700"
            )}
          >
            <p>{whoweareDetails.p1}</p>
            <p>{whoweareDetails.p2}</p>
            <p>{whoweareDetails.p3}</p>
          </article>
        </section>

        <Button size="small" Background="purple" fontColor="white">
          {whoweareDetails.action}
        </Button>
      </section>
    </>
  );
};
