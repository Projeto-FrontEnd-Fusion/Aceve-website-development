"use client";
import { FormProvider, useForm } from "react-hook-form"
import { InputProps, Inputs } from "@/components/Inputs/Inputs";
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { volunteerValidator } from "../../utils/volunteerValidator";
import { phoneMask } from "../../utils/phoneMask";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  description: string
}


export const VolunteerForm = () => {

    const methods = useForm<FormData>({ resolver: zodResolver(volunteerValidator) })
    const { formState: { errors } } = methods

    const onSubmit = async (data: FormData) => {
      console.log("Form data:", data);
    };

    const fields: readonly InputProps[] = [
      { name: "name", type: "text", placeholder: "Nome completo" },
      { name: "phoneNumber", type: "tel", placeholder: "Telefone", mask: phoneMask },
      { name: "email", type: "email", placeholder: "E-mail" },
      { name: "description", as: "textarea", placeholder: "Como pode contribuir com a ONG", height: 240 },
    ];


    return (
        <FormProvider {...methods}>
          <form className="w-full h-full m-auto py-10 px-6 min-md:px-10 bg-white-normal rounded-2xl border-primary-500 border-2 
          flex flex-col justify-between" 
            onSubmit={methods.handleSubmit(onSubmit)}>
              {fields.map((field) => (
                <Inputs
                  key={field.name}
                  {...field}
                  id={field.name}
                  error={errors[field.name as keyof FormData]}
                />
              ))}
              <GlobalButton
                type="submit"
                variant="primary"
                className="p-4 text-xl font-semibold"
                >Enviar Formulário</GlobalButton>
          </form>
        </FormProvider>
    )
};
