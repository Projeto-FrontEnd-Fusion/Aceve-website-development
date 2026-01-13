import { useEffect, useRef, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { httpAdmin } from "@/services/http.admin";

import {
  eventFormSchema,
  type EventFormData,
} from "../schemas/event-form.schema";

import { useEventPhotos } from "./useEventPhotos";

export function useEventForm() {
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

  const handleSelectPhoto = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onSubmit = useCallback(
    async (data: EventFormData) => {
      try {
        setSubmitError(null);

        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("description", data.description ?? "");
        formData.append("totalFunding", data.total.replace(/[^\d]/g, ""));
        formData.append("peopleBenefited", data.beneficiaries);
        formData.append("date", data.date);

        photos.forEach((photo, index) => {
          formData.append(`photos[${index}]`, photo.file);

          if (photo.caption) {
            formData.append(`photoDescriptions[${index}]`, photo.caption);
          }
        });

        await httpAdmin.post("/api/hooks", formData);

        setIsSuccessModalOpen(true);
        methods.reset();
        resetPhotos();
      } catch (error: any) {
        if (error?.response) {
          setSubmitError(
            "Não foi possível salvar o evento. Tente novamente ou revise os dados enviados."
          );
        } else if (error?.request) {
          setSubmitError(
            "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente."
          );
        } else {
          setSubmitError(
            "Ocorreu um erro inesperado ao salvar o evento. Tente novamente."
          );
        }
      }
    },
    [methods, photos, resetPhotos]
  );

  useEffect(() => {
    methods.setValue(
      "photos",
      photos.map((photo) => photo.file),
      { shouldValidate: true }
    );
  }, [photos, methods]);

  return {
    methods,
    onSubmit,

    photos,
    addPhoto,
    removePhoto,
    updateCaption,

    fileInputRef,
    handleSelectPhoto,

    descriptionValue,
    submitError,

    isSuccessModalOpen,
    closeSuccessModal: () => setIsSuccessModalOpen(false),
  };
}
