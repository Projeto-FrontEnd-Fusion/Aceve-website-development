"use client";
import { FormProvider, useForm } from "react-hook-form"
import { Inputs } from "@/components/Inputs/Inputs";
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { volunteerValidator } from "../../utils/volunteerValidator";
import { phoneMask } from "../../utils/phoneMask";

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  description: string
}


export const VolunteerForm = () => {

    const methods = useForm<FormData>({ resolver: zodResolver(volunteerValidator) })
    const { formState: { errors } } = methods
    console.log(methods.watch('phoneNumber'))

    const onSubmit = async (data: FormData) => {
      console.log("Form data:", data);
    };

    return (
        <FormProvider {...methods}>
          <form className="w-full h-full m-auto py-10 px-6 min-md:px-10 bg-white-normal rounded-2xl border-primary-500 border-2 
          flex flex-col justify-between" 
            onSubmit={methods.handleSubmit(onSubmit)}>
              <Inputs
                  name="name"
                  type="text"
                  placeholder="Nome completo"
                  id="name"
                  error={errors.name}
              />

              <Inputs
                  name="phoneNumber"
                  type="tel"
                  mask={phoneMask}
                  placeholder="Telefone"
                  id="phoneNumber"
                  error={errors.phoneNumber}
              />

              <Inputs
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  error={errors.email}
              />

              <Inputs
                  name="description"
                  as="textarea"
                  placeholder="Como pode contribuir com a ONG"
                  id="description"
                  error={errors.description}
                  height={240}
              />
              <button className="w-full border-2 rounded-lg p-4 bg-primary-600 text-xl font-semibold text-grey-100" type="submit">
                  Enviar Formulário
              </button>
          </form>
        </FormProvider>
    )
};
