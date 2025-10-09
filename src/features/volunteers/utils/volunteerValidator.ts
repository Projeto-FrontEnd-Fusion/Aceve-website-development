import { z } from "zod";

export const volunteerValidator = z.object({
  name: z
    .string()
    .min(2, { message: "O nome é obrigatório" }),
  phoneNumber: z
    .string()
    .min(15, { message: "O telefone deve ter 11 digitos" })
    .max(15, { message: "O telefone deve ter 11 digitos" }),
  email: z
    .email("Fornaça um e-mail válido")
    .min(1, { message: "O email é obrigatório" }),
  description:
    z.string().min(5, { message: "A mensagem é muito curta" })
});
