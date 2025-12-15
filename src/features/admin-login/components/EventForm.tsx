import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "./FormInput";

export type EventFormData = {
  name: string;
  description?: string;
  total: string;
  beneficiaries: number;
  day: string;
  month: string;
  year: string;
};

export default function EventForm() {
  const methods = useForm<EventFormData>({
    defaultValues: {
      name: "",
      description: "",
      total: "",
      beneficiaries: 0,
      day: "",
      month: "",
      year: "",
    },
  });
  function onSubmit(data: EventFormData) {
    console.log("dados do formulário", data);
  }

  return (
    <FormProvider {...methods}>
      <section className="w-full h-full bg-primary-100 rounded-lg p-8">
        <header>
          <a href="" className="text-sm text-grey-500 mb-4">
            Voltar
          </a>
          <h1 className="text-grey-800 font-semibold text-2xl">
            Registre seu evento
          </h1>
          <p className="text-sm text-black mt-1">
            Preencha os detalhes para registrar este evento com sucesso.
          </p>
        </header>

        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            name="name"
            label="Nome do Evento"
            rules={{ required: "Nome do evento é obrigatório" }}
          />
        </form>
      </section>
    </FormProvider>
  );
}
