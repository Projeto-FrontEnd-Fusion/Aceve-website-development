"use client";

import { ComponentProps, ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  icon?: ReactElement | null | ReactNode;
  backgroundColor?: "purple" | "transparent";
  size?: "small" | "medium" | "large";
  fontColor?: "purple" | "white";
}

export function Button({
  children,
  icon,
  backgroundColor = "purple",
  size = "medium",
  fontColor = "white",
  ...rest
}: ButtonProps) {
  const backgroundClass = clsx({
    "bg-purple-light": backgroundColor === "purple",
    "bg-transparent": backgroundColor === "transparent",
  });

  const sizeClass = clsx({
    "w-32 h-9 hover:bg-purple-950 mobileSmall:mr-auto mobileSmall:w-40 mobileSmall:h-14 mobileSmall:text-[18px] desktop:text-[20px]":
      size === "small",
    "px-28 py-4": size === "medium",
    "px-36 py-4": size === "large",
  });

  const fontColorClass = clsx({
    "text-purple-light": fontColor === "purple",
    "text-white-smooth": fontColor === "white",
  });

  return (
    <button
      className={clsx(
        "outline-indigo-300 overflow-hidden group rounded flex gap-2 items-center justify-center font-semibold font-roboto text-[14px] ml-auto mr-auto hover:rounded-lg transition-transform duration-1000 desktop:ml-0",
        backgroundClass,
        sizeClass
      )}
      {...rest}
    >
      <span
        className={clsx(
          "translate-x-4 group-hover:translate-x-0 transition-transform duration-1000",
          fontColorClass
        )}
      >
        {children}
      </span>
      <span className="text-white-smooth opacity-10 group-hover:opacity-100 group-hover:text-white-normal translate-y-12 group-hover:translate-y-0 transition-transform duration-1000">
        {icon}
      </span>
    </button>
  );
}
