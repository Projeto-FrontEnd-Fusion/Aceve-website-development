import { FormProvider, useForm } from "react-hook-form";
import { Inputs } from "@/components/Inputs/Inputs";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { EventDate } from "./EventDate";
import { PhotoUploadCard } from "./PhotoUploadCard";
import { parseAndFormatCurrency } from "@/utils/parseAndFormatCurrency";
import { useEffect, useRef, useState } from "react";
import { useEventPhotos } from "../hooks/useEventPhotos";
import { httpAdmin } from "@/services/http.admin";
import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import { FaCheck } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import {
  eventFormSchema,
  type EventFormData,
} from "../schemas/event-form.schema";
import { ModalBase } from "./ModalBase";
import { SuccessModal } from "./SuccessModal";

export default function EventForm() {
  const methods = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      name: "",
      description: "",
      total: "R$ 0,00",
      beneficiaries: "",
      date: "",
      photos: [],
    },
  });

  const { photos, addPhoto, removePhoto, updateCaption, resetPhotos } =
    useEventPhotos();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const descriptionValue = methods.watch("description") ?? "";

  function handleSelectPhoto() {
    fileInputRef.current?.click();
  }

  async function onSubmit(data: EventFormData) {
    try {
      setSubmitError(null);
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
      resetPhotos();
    } catch (error: any) {
      if (error.response) {
        console.error("Erro do backend:", error.response.data);
        setSubmitError(
          "Nao foi possivel salvar o evento. Tente novamente ou revise os dados enviados."
        );
      } else if (error.request) {
        console.error("Erro de rede:", error.request);
        setSubmitError(
          "Nao foi possivel conectar ao servidor. Verifique sua conexao e tente novamente."
        );
      } else {
        console.error("Erro inesperado:", error.message);
        setSubmitError(
          "Ocorreu um erro inesperado ao salvar o evento. Tente novamente."
        );
      }
    }
  }

  const {
    formState: { errors },
  } = methods;

  useEffect(() => {
    methods.setValue(
      "photos",
      photos.map((photo) => photo.file),
      { shouldValidate: true }
    );
  }, [methods, photos]);

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
        {errors.photos?.message && (
          <p className="text-sm text-red-600">{errors.photos.message}</p>
        )}
        {submitError && <p className="text-sm text-red-600">{submitError}</p>}

        <GlobalButton
          variant="primary"
          type="submit"
          className="w-[286px] h-[48px] rounded-[5px] py-2 px-6 gap-2 mx-auto mt-4"
        >
          Salvar Registro
        </GlobalButton>
      </form>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </FormProvider>
  );
}
