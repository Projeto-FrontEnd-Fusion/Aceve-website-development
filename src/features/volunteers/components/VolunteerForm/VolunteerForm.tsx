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
import { useFormSubmit } from "@/hooks/useFormSubmit";

export const VolunteerForm = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<false | string>(false);

  const { isLoading, handleIsLoading: submitWithLoading } = useFormSubmit<IVolunteer>(async (data) => {
    await submitVolunteer(data, (succeeded) => {
      if (succeeded) {
        completeSubmit();
      } else {
        failedSubmit();
      }
    });
  })

  const methods = useForm<IVolunteer>({
    resolver: zodResolver(volunteerValidator),
  });

  const {handleSubmit} = methods

  const {
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: IVolunteer) => {
    try {
      submitVolunteer(data, (succeeded) => {
        if (succeeded) {
          completeSubmit();
        } else {
          failedSubmit();
        }
      });
    } catch (error) {
      failedSubmit();
    }
  };

  const completeSubmit = () => {
    reset();
    setMessage(
      "Formulário enviado com sucesso! Entraremos em contato em breve!"
    );
    setTimeout(() => setMessage(false), 100000);
  };

  const failedSubmit = () => {
    setMessage("Falha ao enviar o formulário");
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
        onSubmit={handleSubmit(submitWithLoading)}
      >
        {fields.map((field) => (
          <Inputs
            key={field.name}
            {...field}
            id={field.name}
            error={errors[field.name as keyof IVolunteer]}
            required={true}
          />
        ))}
        <GlobalButton
          type="submit"
          disabled={isLoading}
          variant={isLoading ? "disabled" : "primary"}
          className="p-4 text-xl font-semibold relative"
        >
          {isLoading ? (
            <>
              Enviando...

            </>
          ) : (
            "Enviar Formulário"
          )}

          {isLoading ? <AiOutlineLoading3Quarters className="animate-spin  absolute right-6" /> : null}

        </GlobalButton>
        {message && (
          <p
            className={`text-center pt-2 ${message === "Falha ao enviar o formulário"
                ? "text-red-600"
                : "text-primary-700"
              }`}
          >
            {message}
          </p>
        )}
      </form>
    </FormProvider>
  );
};
