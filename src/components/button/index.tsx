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
      className={clsx(`rounded flex items-center justify-center`, {
        "bg-purple-light": Background === "purple",
        "bg-transparent": Background === "transparent",
        "px-8 py-4": size == "small",
        "px-28 py-4": size == "medium",
        "px-36 py-4": size == "large",
      })}
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
