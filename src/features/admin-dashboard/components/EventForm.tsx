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
  beneficiaries: string;
  date: string;
};

export default function EventForm() {
  const methods = useForm<EventFormData>({
    defaultValues: {
      name: "",
      description: "",
      total: "R$ 0,00",
      beneficiaries: "",
      date: "",
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
        <div>
          <label
            htmlFor="name"
            className="block text-md text-grey-800 font-bold mb-2"
          >
            Nome do evento
          </label>
          <Inputs
            name="name"
            type="text"
            placeholder="Digite o nome do evento"
            error={errors.name}
            className="bg-primary-100"
          />
        </div>

        {/* Descrição */}
        <div>
          <label
            htmlFor="description"
            className="block text-md text-grey-800 font-bold mb-2"
          >
            Descrição do evento (opcional)
          </label>
          <Inputs
            as="textarea"
            name="description"
            placeholder="Descreva brevemente sobre as ações, resultados e impacto do evento"
            height={120}
            error={errors.description}
            maxLength={500}
            className="bg-primary-100"
          />
        </div>

        {/* Total / Beneficiários */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="total"
              className="block text-md text-grey-800 font-bold mb-2"
            >
              Total arrecadado
            </label>
            <Inputs
              name="total"
              type="text"
              placeholder="R$ 0,00"
              error={errors.total}
              inputMode="numeric"
              mask={(value) => parseAndFormatCurrency(value).formatted}
              className="bg-primary-100"
            />
          </div>

          <div>
            <label
              htmlFor="beneficiaries"
              className="block text-md text-grey-800 font-bold mb-2"
            >
              Pessoas beneficiadas
            </label>
            <Inputs
              name="beneficiaries"
              type="text"
              inputMode="numeric"
              placeholder="0"
              error={errors.beneficiaries}
              pattern="[0-9]*"
              mask={(value) => String(value).replace(/\D/g, "")}
              className="bg-primary-100"
            />
          </div>
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
