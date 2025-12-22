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
    <div className="flex flex-col gap-1">
      <label
        htmlFor="{name}"
        className="text-sm font-medium text-grey-700 font-medium"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, rules)}
        className="h-11 px-3 rounded-md border border-primary-800 text-sm bg-primary-100 font-medium"
      />
      {errors[name] && (
        <span className="text-xs">{String(errors[name]?.message)}</span>
      )}
    </div>
  );
}
