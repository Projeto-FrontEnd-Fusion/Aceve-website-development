import type { ComponentProps } from "react";

export interface IbannerProps extends ComponentProps<"section"> {
  title?: string;
  description?: string;
  action?: string;
  bannerImg?: string;
}
