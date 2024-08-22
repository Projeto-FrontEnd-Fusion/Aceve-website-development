import clsx from "clsx";
import type { ComponentProps } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";

export interface IButtonItem extends ComponentProps<"button"> {
  title: string;
  btnType: "primary" | "secondary";
}
export const MenuPrimaryButton = ({
  title,
  btnType,
  ...props
}: IButtonItem) => {
  return (
    <>
      <button
        {...props}
        className={clsx(
          "group overflow-hidden relative text-[clamp(14px, 2vw, 16px)] rounded-lg px-2 py-2 h-12  flex items-center justify-center hover:rounded-xl transition-all duration-1000",

          {
            "w-28 laptop:font-semibold md:border-2 laptop:border-purple-medium laptop:text-purple-medium laptop:hover:bg-purple-100":
              btnType === "secondary",
          },

          {
            "w-36 bg-purple-light hover:bg-purple-medium text-white-normal":
              btnType === "primary",
          }
        )}
      >
        <span className="transition-transform duration-1000 absolute group-hover:-translate-x-2 group-hover:font-normal:">
          {title}
        </span>
        <span
          className={clsx(
            "absolute translate-x-[28px] translate-y-10 group-hover:-translate-y-[1px] transition-transform duration-1000",
            { "translate-x-[40px]": btnType === "primary" }
          )}
        >
          {btnType === "primary" ? (
            <BiDonateHeart className="text-[24px]" />
          ) : (
            <CiShoppingTag strokeWidth={1} className="text-[22px]" />
          )}
        </span>

        {/* <span className="transition-transform duration-1000 absolute group-hover:-translate-y-10 group-hover:font-normal:">
          {title}
        </span>
        <span
          className={clsx(
            "absolute translate-x-0 translate-y-10 group-hover:-translate-y-[1px] transition-transform duration-1000",
            { "translate-x-0": btnType === "primary" }
          )}
        >
          {btnType === "primary" ? (
            <BiDonateHeart className="text-[28px] rotate-6" />
          ) : (
            <CiShoppingTag strokeWidth={1.2} className="text-[28px]" />
          )}
        </span> */}
      </button>
    </>
  );
};
