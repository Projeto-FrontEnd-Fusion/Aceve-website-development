import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError
};

export const Inputs = forwardRef<HTMLInputElement, InputProps>(({ ...rest }: InputProps, ref) => {
    return (
        <div className="mb-8">
            <input className="w-full border-primary-500 border-2 rounded-lg p-4 text-grey-500 text-base placeholder:text-grey-400" ref={ref} {...rest} />
        </div>
    )
})