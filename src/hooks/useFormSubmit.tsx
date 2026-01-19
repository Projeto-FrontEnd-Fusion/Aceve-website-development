import { useState } from "react";

export const useFormSubmit = <T,>(onSubmit: (data: any) => Promise<void>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleIsLoading = async (data: T) => {
        try{
            setIsLoading(true);
            await onSubmit(data)
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        handleIsLoading
    }
} 