import { FormProvider, useForm } from "react-hook-form";
import { Inputs } from "@/components/Inputs/Inputs";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { EventDate } from "./EventDate";
import { PhotUploadCard } from "./PhotoUploadCard";

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

  const {
    formState: { errors },
  } = methods;

  return (
    <section className="bg-primary-100 rounded-lg min-h-screen w-full">
      <div className="w-full max-w-[960px] px-8 py-10">
        <header className="mb-8">
          <a
            href=""
            className="text-sm text-grey-500 mb-2 inline-flex items-center gap-2"
          >
            Voltar
          </a>
          <h1 className="text-grey-800 font-semibold text-2xl">
            Registre seu evento
          </h1>
          <p className="text-sm text-black mt-1">
            Preencha os detalhes para registrar este evento com sucesso.
          </p>
        </header>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            {/* Nome do evento */}
            <Inputs
              name="name"
              type="text"
              placeholder="Nome do Evento"
              error={errors.name}
            />

            {/* Descrição */}
            <Inputs
              as="textarea"
              name="description"
              placeholder="Descrição do evento (opcional)"
              height={120}
              error={errors.description}
              maxLength={500}
            />

            {/* Total / Beneficiários */}
            <div className="grid grid-cols-2 gap-6">
              <Inputs
                name="total"
                type="text"
                placeholder="Total arrecadado"
                error={errors.total}
              />

              <Inputs
                name="beneficiaries"
                type="number"
                placeholder="Pessoas beneficiadas"
                error={errors.beneficiaries}
              />
            </div>

            {/* Data */}
            <div className="flex items-end gap-6">
              <EventDate />
            </div>

            {/* Upload de fotos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <PhotUploadCard />
              <PhotUploadCard />
              <PhotUploadCard />
              <PhotUploadCard />
              <PhotUploadCard />
            </div>

            <GlobalButton
              variant="primary"
              type="submit"
              className="w-[286px] h-[48px] rounded-[5px] py-2 px-6 gap-2 mx-auto mt-4"
            >
              Salvar Registro
            </GlobalButton>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
