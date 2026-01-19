import { useState } from "react";
import { FieldValues } from "react-hook-form";

type SubmitFn<T extends FieldValues> = (data: T) => Promise<void>

export const useFormSubmit = <T extends FieldValues>(onSubmit: SubmitFn<T>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleIsLoading = async (data: T) => {
        setIsLoading(true);
        try{
            await onSubmit(data)
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        handleIsLoading
    } as const
} 

