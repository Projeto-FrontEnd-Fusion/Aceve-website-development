"use client";

import { ComponentProps, ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  icon?: ReactElement | null | ReactNode;
  Background: "purple" | "transparent";
  size?: "small" | "medium" | "large";
  fontColor: string;
}

export function Button({
  children,
  icon,
  Background,
  size,
  fontColor,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `rounded grid place-content-center font-semibold font-roboto text-[14px] `,
        {
          "bg-purple-light": Background === "purple",
          "bg-transparent": Background === "transparent",
          "w-32 h-9 hover:bg-purple-950 transition-colors duration-500 mobileSmall:mr-auto mobileSmall:w-40 mobileSmall:h-14 mobileSmall:text-[18px] desktop:text-[20px]":
            size == "small",
          "px-28 py-4": size == "medium",
          "px-36 py-4": size == "large",
        }
      )}
    >
      <span
        className={clsx(``, {
          "text-purple-light": fontColor === "purple",
          "text-white-smooth": fontColor === "white",
        })}
      >
        {children}
      </span>
      {icon}
    </button>
  );
}
