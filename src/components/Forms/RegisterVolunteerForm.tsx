"use client";
import { useForm } from "react-hook-form"
import { Inputs } from "../Inputs/Inputs";
import { registerVolunteerFormSchema } from "@/features/form/RegisterVolunteerFormSchema";
import {zodResolver} from "@hookform/resolvers/zod"
type FormData = {
    name: string;
    phoneNumber: string;
    email: string;
    description: string
}


export const RegisterVolunteerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(registerVolunteerFormSchema)});


    const onSubmit = (data: FormData) => {
        console.log("Form data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs
                {...register("name")}
                type="string"
                placeholder="Nome completo"
                id="name"
                error={errors.name}
            />
            
            <Inputs
                {...register("phoneNumber")}
                type="tel"
                placeholder="Telefone"
                id="phoneNumber"
                error={errors.phoneNumber}
            />
            
            <Inputs
                {...register("email")}
                type="email"
                placeholder="E-mail"
                id="email"
                error={errors.email}
            />
             
            <Inputs
                {...register("description")}
                type="text"
                placeholder="Como pode contribuir com a ONG"
                id="description"
                error={errors.description}
            />
            <button type="submit">Enviar Formulário</button>
        </form>
    )
};