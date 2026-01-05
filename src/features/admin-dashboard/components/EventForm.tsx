import { FormProvider, useForm } from "react-hook-form";
import { Inputs } from "@/components/Inputs/Inputs";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { EventDate } from "./EventDate";
import { PhotoUploadCard } from "./PhotoUploadCard";
import { parseAndFormatCurrency } from "@/utils/parseAndFormatCurrency";
import { useRef, useState } from "react";
import { EventPhoto } from "../types/event-photo";
import { useEventPhotos } from "../hooks/useEventPhotos";
import { http } from "@/services/http";
import axios from "axios";
import { httpAdmin } from "@/services/http.admin";
import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import { FaCheck } from "react-icons/fa";

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

  const { photos, addPhoto, removePhoto, updateCaption } = useEventPhotos();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const descriptionValue = methods.watch("description") ?? "";

  function handleSelectPhoto() {
    fileInputRef.current?.click();
  }

  async function onSubmit(data: EventFormData) {
    try {
      if (photos.length === 0) {
        alert("Adicione pelo menos uma foto para salvar o evento.");
        return;
      }

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description ?? "");
      formData.append("totalFunding", data.total.replace(/[^\d]/g, ""));
      formData.append("peopleBenefited", data.beneficiaries);
      formData.append("date", data.date);

      photos.forEach((photo, index) => {
        formData.append(`photos${index}`, photo.file);
        if (photo.caption) {
          formData.append(`photoDescription${index}`, photo.caption);
        }
      });
      await httpAdmin.post("/api/events", formData);
      setIsSuccessModalOpen(true);
      methods.reset();
    } catch (error: any) {
      if (error.response) {
        console.error("Erro do backend:", error.response.data);
        alert(`Erro ao salvar evento: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        console.error("Erro de rede:", error.request);
        alert(
          "Erro de rede:não foi possível conectar ao servidor. Verifique a URL e se o backend está rodando."
        );
      } else {
        console.error("Erro inesperado:", error.message);
        alert(`Erro ineperado:${error.message}`);
      }
    }
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
          <div className="relative">
            <Inputs
              as="textarea"
              name="description"
              placeholder="Descreva brevemente sobre as ações, resultados e impacto do evento"
              error={errors.description}
              maxLength={500}
              height={171}
              className="bg-primary-100 h-[10.5rem] pb-8"
            />
            <span className="pointer-events-none absolute bottom-3 right-4 text-base text-grey-500">
              {descriptionValue.length}/500
            </span>
          </div>
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
        <div className="flex justify-around">
          <EventDate />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) addPhoto(file);
            }}
          />

          <GlobalButton
            variant="primary"
            className="w-[286px] self-end h-[48px] rounded-[5px] flex items-center gap-2 px-6"
            type="button"
            onClick={handleSelectPhoto}
          >
            Selecionar Foto
          </GlobalButton>
        </div>

        {/* Upload de fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <PhotoUploadCard
              key={index}
              photo={photos[index]}
              onRemove={() => {
                removePhoto(index);
              }}
              onCaptionChange={(value) => updateCaption(index, value)}
            />
          ))}
        </div>

        <GlobalButton
          variant="primary"
          type="submit"
          className="w-[286px] h-[48px] rounded-[5px] py-2 px-6 gap-2 mx-auto mt-4"
        >
          Salvar Registro
        </GlobalButton>
      </form>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div
            className="relative w-full max-w-[520px] bg-primary-100 rounded-lg px-6 py-6 sm:px-8 sm:py-8
        flex flex-col gap-6 justify-between items-center"
          >
            <div className="w-[40px] h-[40px] rounded-full border-4 border-primary-800 flex items-center justify-center">
              <FaCheck className="text-primary-800 w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col gap-2.5 text-center sm:text-left">
              <h2 className="font-inter text-center font-semibold text-xl sm:text-2xl text-grey-800">
                Dados salvos com sucesso!
              </h2>

              <p className="font-inter text-grey-700 text-sm sm:text-base text-center">
                As informações foram registradas com sucesso. Você pode voltar
                ao início ou adicionar um novo registro.
              </p>
            </div>

            <div className="flex flex-row gap-4 justify-center">
              <GlobalLink
                variant="outlined-primary-700"
                href="https://violetaeliz.org.br"
                className="w-[150px] sm:w-[173px] h-[52px]
            sm:h-[60px] px-4 py-3 rounded-lg flex items-center justify-center font-inter font-semibold
            text-sm sm:text-base"
              >
                Ir para eventos
              </GlobalLink>

              <GlobalButton
                variant="primary"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-[150px] sm:w-[173px] h-[52px] sm:h-[60px] px-4 py-3 rounded-lg flex items-center justify-center font-inter
            font-semibold text-sm sm:text-base"
              >
                Novo registro
              </GlobalButton>
            </div>
          </div>
        </div>
      )}
    </FormProvider>
  );
}
