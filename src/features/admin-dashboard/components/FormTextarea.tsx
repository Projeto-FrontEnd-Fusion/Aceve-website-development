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
    <div>
      <label>{label}</label>
      <textarea {...register(name)} maxLength={maxLength} className="" />
    </div>
  );
}
