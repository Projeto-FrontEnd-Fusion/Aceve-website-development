import { FormProvider, useForm } from "react-hook-form";
import { Inputs } from "@/components/Inputs/Inputs";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { EventDate } from "./EventDate";
import { PhotUploadCard } from "./PhotoUploadCard";
import { parseAndFormatCurrency } from "@/utils/parseAndFormatCurrency";

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
      total: "R$ 0,00",
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
            placeholder="0,00"
            error={errors.total}
            inputMode="numeric"
            mask={(value) => parseAndFormatCurrency(value).formatted}
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
  );
}
