"use client";

import { useFormContext } from "react-hook-form";
import type { EventFormData } from "./EventForm";

interface FormTextareaProps {
  name: string;
  label: string;
  maxLength?: number;
}

export function FormTextarea({ name, label, maxLength }: FormTextareaProps) {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-grey-700">
        {label}
      </label>
      <textarea
        id={name}
        {...register(name)}
        maxLength={maxLength}
        className="min-h-[120px] px-3 py-2 rounded-md border border-primary-800 text-sm bg-primary-100"
      />
    </div>
  );
}
