"use client";

import { ComponentProps, ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  icon?: ReactElement | null | ReactNode;
  Background: "purple" | "transparent";
  size: "small" | "normal" | "medium" | "large";
  fontColor: "white" | "purple";
}

export function Button({
  children,
  icon,
  Background,
  size,
  fontColor,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        {
          "bg-purple-light": Background === "purple",
          "bg-transparent border-2 border-purple-light":
            Background === "transparent",
          "py-2 px-12": size == "normal",
          "w-32 h-9 hover:bg-purple-950 transition-colors duration-500 mobileSmall:mr-auto mobileSmall:w-40 mobileSmall:h-14 mobileSmall:text-[18px]":
            size == "small",
          "px-28 py-4": size == "medium",
          "px-36 py-4": size == "large",
        }
      )}
      {...rest}
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
