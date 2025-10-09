"use client";
import { FormProvider, useForm } from "react-hook-form";
import { InputProps, Inputs } from "@/components/Inputs/Inputs";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { volunteerValidator } from "../../utils/volunteerValidator";
import { phoneMask } from "../../utils/phoneMask";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { submitVolunteer } from "../../services/submitVolunteer";
import { type IVolunteer } from "../../types/IVolunteer";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const VolunteerForm = () => {
  const [Isloading, setIsLoading] = useState<boolean>(false);

  const methods = useForm<IVolunteer>({
    resolver: zodResolver(volunteerValidator),
  });
  const {
    formState: { errors },
  } = methods;

  const onSubmit = (data: IVolunteer) => {
    setIsLoading(true);
    submitVolunteer(data, (succeeded) =>
      succeeded ? setIsLoading(false) : alert("Falha ao enviar o formulário")
    );
  };

  const fields: readonly InputProps[] = [
    { name: "name", type: "text", placeholder: "Nome completo" },
    {
      name: "phoneNumber",
      type: "tel",
      placeholder: "Telefone",
      mask: phoneMask,
    },
    { name: "email", type: "email", placeholder: "E-mail" },
    {
      name: "description",
      as: "textarea",
      placeholder: "Como pode contribuir com a ONG",
      height: 240,
    },
  ];

  return (
    <FormProvider {...methods}>
      <form
        className="w-full h-full m-auto py-10 px-6 min-md:px-10 bg-white-normal rounded-2xl border-primary-500 border-2 
          flex flex-col justify-between"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {fields.map((field) => (
          <Inputs
            key={field.name}
            {...field}
            id={field.name}
            error={errors[field.name as keyof IVolunteer]}
          />
        ))}
        <GlobalButton
          type="submit"
          disabled={Isloading}
          variant={Isloading ? "disabled" : "primary"}
          className="p-4 text-xl font-semibold relative"
        >
          {Isloading ? (
            <>
              Enviando...
              <AiOutlineLoading3Quarters className="animate-spin  absolute right-6" />
            </>
          ) : (
            "Enviar Formulário"
          )}
        </GlobalButton>
      </form>
    </FormProvider>
  );
};
