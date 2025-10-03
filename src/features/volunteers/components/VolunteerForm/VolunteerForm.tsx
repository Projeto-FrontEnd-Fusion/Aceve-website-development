"use client";
import { useForm } from "react-hook-form"
import { Inputs } from "@/components/Inputs/Inputs";
import { zodResolver } from "@hookform/resolvers/zod"
import { volunteerValidator } from "../../utils/volunteerValidator";
type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  description: string
}


export const VolunteerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(volunteerValidator) });


  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <form className="w-full h-full m-auto py-10 px-6 min-md:px-10 bg-white-normal rounded-2xl border-primary-500 border-2 
        flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}>
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
        type="textarea"
        placeholder="Como pode contribuir com a ONG"
        id="description"
        error={errors.description}
        height={240}
      />
      <button className="w-full border-2 rounded-lg p-4 bg-primary-600 text-xl font-semibold text-grey-100" type="submit">
        Enviar Formulário
      </button>
    </form>
  )
};
