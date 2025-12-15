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
      <input
        type={type}
        {...register(name, rules)}
        className={`rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 ${
          errors[name]
            ? "border-red-500 focus:ring-red-500"
            : "border-purple-300 focus:ring-purple-500"
        }`}
      />
      {errors[name] && <span>{String(errors[name]?.message)}</span>}
    </div>
  );
}
