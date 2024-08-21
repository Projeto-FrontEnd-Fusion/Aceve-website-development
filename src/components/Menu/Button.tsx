import clsx from "clsx";
import type { ComponentProps } from "react";

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
          "text-[clamp(14px, 2vw, 16px)] rounded-lg px-2 py-2 h-12  flex items-center justify-center ",

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
        {title}
      </button>
    </>
  );
};
