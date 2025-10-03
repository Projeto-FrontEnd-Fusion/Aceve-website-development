import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: FieldError;
    type?: string;
    height?: number;

};

export const Inputs = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({ type = "text", error, height, ...rest }: InputProps, ref) => {
    return (
        <div className="mb-4 min-md:mb-8">
            {type === "textarea" ? (
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    className={`w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 resize-none ${error ? "border-red-500" : ""
                        }`}
                    style={{ height: height ? `${height}px` : "128px" }}
                    {...rest}
                />
            ) : (
                <input
                    type={type}
                    ref={ref as React.Ref<HTMLInputElement>}
                    className={`w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 ${error ? "border-red-500" : ""
                        }`}
                    {...rest}
                />
            )}
            {error && (
                <p className="text-red-500 text-sm mt-1">{error.message?.toString()}</p>
            )}
        </div>
    )
})