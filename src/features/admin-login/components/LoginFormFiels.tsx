import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Inputs } from "@/components/Inputs/Inputs";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";

type LoginFormInputs = {
    email: string;
    password: string;
}

export function LoginFormFields({ apiError }: { apiError: string }) {
    const { control, formState: { isValid } } = useFormContext<LoginFormInputs>()

    return (
        <div className="bg-primary-100 flex items-center justify-center min-h-screen">
            <h2 className="text-primary-800 font-bold text-center">Login</h2>

            <div>
                <label className="font-bold text-primary-600">E-mail</label>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Informe o e-mail" }}
                    render={({ field, fieldState }) => (
                        <Inputs
                            {...field}
                            type="email"
                            placeholder="E-mail"
                            error={fieldState.error}
                        />
                    )}
                />

                <label className="font-bold text-primary-600">Senha</label>
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Informe a senha" }}
                    render={({ field, fieldState }) => (
                        <Inputs
                            {...field}
                            type="password"
                            placeholder="Senha"
                            error={fieldState.error}
                        />
                    )}
                />

                {apiError && <p className="text-red-500">{apiError}</p>}

                <div className="flex justify-center">
                    <GlobalButton
                        variant="primary"
                        type="submit"
                        disabled={!isValid}
                        className="w-[286px] h-[50px] rounded-[5px] py-2 px-4 gap-2 mx-auto mt-4"
                    >
                        Entrar
                    </GlobalButton>
                </div>
            </div>
        </div>
    )
}