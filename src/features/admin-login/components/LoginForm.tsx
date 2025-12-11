"use client"
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginRequest } from "../api/login";
import { LoginFormFields } from "./LoginFormFiels";

type LoginFormInputs = {
    email: string;
    password: string;
}

export function LoginForm() {
    const router = useRouter()
    const [apiError, setApiError] = useState("")

    const methods = useForm<LoginFormInputs>({
        mode: "onChange",
        defaultValues: { email: "", password: "" },
    })

    const { handleSubmit } = methods

    const onSubmit = async (data: LoginFormInputs) => {
        setApiError("")

        const result = await loginRequest(data)
        if (result.error) {
            return setApiError(result.error)
        }
        router.push("/admin/ ") // Alterar
    }

    return (

        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <LoginFormFields apiError={apiError} />
            </form>
        </FormProvider>
    )
}