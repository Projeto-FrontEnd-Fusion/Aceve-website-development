"use client";

import { useFormContext } from "react-hook-form";
import type { EventFormData } from "./EventForm";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";

export function EventDate() {
  const { register } = useFormContext<EventFormData>();

  return (
    <div>
      <div>
        <select {...register("day")} className="input">
          <option value="">Dia</option>
        </select>
        <select {...register("month")} className="input">
          <option value="">Mês</option>
        </select>
        <select {...register("year")} className="input">
          <option value="">Ano</option>
        </select>
        <GlobalButton
          variant="primary"
          className="w-[286px] h-[60px] gap-[10px] rounded-[5px] px-5 py-3"
        >
          Selecionar Foto
        </GlobalButton>
      </div>
    </div>
  );
}
