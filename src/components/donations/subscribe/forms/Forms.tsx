import { InputMask } from "@react-input/mask";
import { GoChevronDown } from "react-icons/go";
import { schemaDonation } from "@/model/schemas/schemaDonation";

import { useValidation } from "@/hook/useForm";

export function FormSubscribe() {
  interface OptionAvailability {
    value: string;
    label: string;
  }

  interface OptionInterestArea {
    value: string;
    label: string;
  }

  const optionsAvailability: OptionAvailability[] = [
    { value: "morning", label: "Manhã (08:00 - 12:00)" },
    { value: "afternoon", label: "Tarde (12:00 - 18:00)" },
    { value: "evening", label: "Noite (18:00 - 22:00)" },
    { value: "flexible", label: "Horário Flexível" },
  ];

  const optionsInterestArea: OptionInterestArea[] = [
    { value: "morning", label: "Manhã (08:00 - 12:00)" },
  ];

  const { handleSubmit, register, errors, watch } = useValidation({
    schemas: schemaDonation,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 w-full flex flex-col  gap-4 self-center max-w-[500px]"
    >
      <fieldset className="flex flex-col gap-2 relative">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          Nome completo<span className="text-[#FF0000]">*</span>
        </label>
        <input
          {...register("name")}
          className="p-3 border-2 border-purple-light rounded-lg outline-purple-haiti max-w-[500px]"
          placeholder="Digite seu nome completo"
        />
        {errors.name && (
          <span className="ml-1 text-sm text-red-700 animate-pulse">
            {errors.name.message}
          </span>
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-2 relative">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          Data de nascimento<span className="text-[#FF0000]">*</span>
        </label>
        <input
          {...register("date")}
          type="date"
          className="p-3 border-2 border-purple-light rounded-lg outline-purple-haiti max-w-[500px]"
          placeholder="DD/MM/AAAA"
        />

        {errors.date && (
          <span className="ml-1 text-sm text-red-700 animate-pulse">
            {errors.date.message}
          </span>
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          Telefone<span className="text-[#FF0000]">*</span>
        </label>

        <InputMask
          {...register("phone")}
          mask="(__) _____-____"
          replacement={{ _: /\d/ }}
          className="p-3 border-2 border-purple-light rounded-lg outline-purple-haiti max-w-[500px]"
          placeholder="(XX) XXXXX-XXXX"
        />
        {errors.phone && (
          <span className="ml-1 text-sm text-red-700 animate-pulse">
            {errors.phone.message}
          </span>
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          E-mail<span className="text-[#FF0000]">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          className="p-3 border-2 border-purple-light rounded-lg outline-purple-haiti max-w-[500px]"
          placeholder="Digite seu e-mail"
        />
        {errors.email && (
          <span className="ml-1 text-sm text-red-700 animate-pulse">
            {errors.email.message}
          </span>
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          Disponibilidade<span className="text-[#FF0000]">*</span>
        </label>
        <div className="flex w-full relative flex-col gap-2">
          <GoChevronDown
            size={20}
            className="absolute z-10 right-3 top-[50%] translate-y-[-48%]"
          />

          <select
            {...register("availability")}
            className="w-full p-3 border-2 border-purple-light rounded-lg outline-purple-haiti appearance-none  z-0 max-w-[500px]"
          >
            <option value="" disabled selected>
              Selecione uma opção
            </option>
            {optionsAvailability.map((e) => (
              <option value={e.value}>{e.label}</option>
            ))}
          </select>
          {errors.availability && (
            <span className="ml-1 text-sm text-red-700 animate-pulse">
              {errors.availability.message}
            </span>
          )}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          Área de interesse<span className="text-[#FF0000]">*</span>
        </label>
        <div className="flex w-full relative flex-col gap-2">
          <GoChevronDown
            size={20}
            className="absolute z-10 right-3 top-[50%] translate-y-[-48%]"
          />

          <select
            {...register("interestArea")}
            className="w-full p-3 border-2 border-purple-light rounded-lg outline-purple-haiti appearance-none  z-0 max-w-[500px]"
          >
            <option value="" disabled selected>
              Selecione uma opção
            </option>
            {optionsAvailability.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.interestArea && (
            <span className="ml-1 text-sm text-red-700 animate-pulse">
              {errors.interestArea.message}
            </span>
          )}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <label className="font-roboto font-medium text-sm leading-[100%] text-[#222222]">
          Mensagem
        </label>
        <textarea
          {...register("message")}
          className="w-full p-3 h-60 border-2 border-purple-light rounded-lg outline-purple-haiti appearance-none  max-w-[500px]"
        />
        {errors.message && (
          <span className="ml-1 text-sm text-red-700 animate-pulse">
            {errors.message.message}
          </span>
        )}
      </fieldset>

      <fieldset className="flex w-full items-center justify-center">
        <input
          className="font-roboto font-medium   cursor-pointer py-2 px-10 border-2 bg-purple-light text-white-smooth rounded-lg outline-purple-haiti appearance-none border-none"
          type="submit"
          value={"Enviar candidatura"}
        />
      </fieldset>
    </form>
  );
}
