import clsx from "clsx";
import type { ComponentProps } from "react";

export interface IButtonItem extends ComponentProps<"button"> {
  title: string;
  btnType: "primary" | "secondary";
}
export const ButtonPrimarySmall = ({
  title,
  btnType,
  ...props
}: IButtonItem) => {
  return (
    <>
      <button
        {...props}
        className={clsx(
          "text-[clamp(14px, 2vw, 16px)] w-36 rounded-lg px-2 py-2 h-12  flex items-center justify-center ",
          
          {
            "lg:font-semibold lg:border-2 md:border-purple-medium md:text-purple-medium md:hover:bg-purple-100":
              btnType === "secondary",
          },

          {
            "bg-purple-light hover:bg-purple-medium text-white-normal":
              btnType === "primary",
          }
        )}
      >
        {title}
      </button>
    </>
  );
};
