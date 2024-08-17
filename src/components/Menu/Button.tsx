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
          "font-semibold bg-purple-light w-36 rounded-lg px-2 py-2 h-12 text-white-normal flex items-center justify-center hover:bg-purple-medium",
          {
            "font-semibold border-2 border-purple-medium bg-white-normal text-purple-medium hover:bg-zinc-100":
              btnType === "secondary",
          }
        )}
      >
        {title}
      </button>
    </>
  );
};
