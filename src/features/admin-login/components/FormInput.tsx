"use client";
import { useFormContext } from "react-hook-form";
import type { EventFormData } from "./EventForm";

interface FormInputProps {
  name: keyof EventFormData;
  label: string;
  type?: string;
  rules?: any;
}

export function FormInput({
  name,
  label,
  type = "text",
  rules,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<EventFormData>();

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(name, rules)} className="" />
      {errors[name] && <span>{String(errors[name]?.message)}</span>}
    </div>
  );
}
