"use client";

import { useFormContext } from "react-hook-form";
import type { EventFormData } from "./EventForm";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";

export function EventDate() {
  const { register } = useFormContext<EventFormData>();

  return (
    <div className="w-full">
      <label className="block text-md text-grey-800 font-medium mb-2">
        Data do evento
      </label>
      <div className="flex items-end gap-6">
        <input
          {...register("date")}
          type="date"
          className="w-[220px] h-[50px] rounded-md border border-primary-800 bg-primary-100 px-3 text-grey-800"
          aria-label="Data do evento"
        />
        <GlobalButton
          variant="primary"
          className="w-[286px] h-[48px] rounded-[5px] flex items-center gap-2 px-6"
        >
          Selecionar Foto
        </GlobalButton>
      </div>
    </div>
  );
}
