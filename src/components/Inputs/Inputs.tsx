import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError
};

export const Inputs = forwardRef<HTMLInputElement, InputProps>(({ ...rest }: InputProps, ref) => {
    return (
        <div>
            <input className="" ref={ref} {...rest} />
        </div>
    )
})