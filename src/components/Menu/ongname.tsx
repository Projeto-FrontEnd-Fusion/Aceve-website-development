import clsx from "clsx";
import type { ComponentProps } from "react";

interface IDescriptionProps {
  description?: string;
}

interface IOngDescriptionProps extends ComponentProps<"h1"> {
  headerDetails?: IDescriptionProps;
}

export const OngDescription = ({
  headerDetails: { description } = {},
  ...props
}: IOngDescriptionProps) => {
  return (
    <h1
      className={clsx(
        "text-[10px] leading-none text-purple-light",
        "w-32 px-1",
        "mobileSmall:w-[45%] mobileSmall:px-12 mobileSmall:pl-2 mobileSmall:text-[12px] font-semibold",
        "md:text-[14px] md:w-[30%]",
        "mobileLarger:w-[35%]",
        "lg:w-[60%] lg:text-[12px]"
      )}
      {...props}
    >
      {description || "descrição padrão"}
    </h1>
  );
};
