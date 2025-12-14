"use client"
import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginRequest } from "../api/login";
import { Inputs } from "@/components/Inputs/Inputs";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";

type LoginFormInputs = {
    email: string;
    password: string;
}

// const { formState: { isValid } } = useFormContext<LoginFormInputs>()

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
        <div className="bg-primary-100 flex items-center justify-center min-h-screen">

            <div className="w-full max-w-md">
                <img
                    src="logo-header.png"
                    alt="Logo da ONG"
                    className="w-25 h-25 mb-6 mx-auto"
                />

                <h2 className="text-primary-800 font-bold text-center">
                    Login
                </h2>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="font-bold text-primary-600">E-mail</label>

                            <Inputs
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                className="bg-primary-600/20 p-2 rounded-lg shadow-md w-full text-grey-700 placeholder:text-grey-700 outline-none focus:bg-primary-600/20"

                            />

                            <label className="font-bold text-primary-600">Senha</label>
                            <Inputs
                                name="password"
                                type="password"
                                placeholder="Senha"
                                className="bg-primary-600/20 p-2 rounded-lg shadow-md w-full placeholder:text-grey-700 outline-none"

                            />

                            {apiError && <p className="text-red-500">{apiError}</p>}

                        </div>
                        <div className="flex justify-center">
                            <GlobalButton
                                variant="primary"
                                type="submit"
                                className="w-[286px] h-[50px] rounded-[5px] py-2 px-4 gap-2 mx-auto mt-4"
                                //disabled={!isValid}
                            >
                                Entrar
                            </GlobalButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}