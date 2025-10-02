import { z } from "zod";

export const volunteerFormValidator = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  phoneNumber: z
    .string()
    .min(11, { message: "O telefone deve ter 11 caracteres" })
    .max(11, { message: "O telefone deve ter 11 caracteres" }),
  email: z
    .email("Fornaça um e-mail válido")
    .min(1, { message: "O email é obrigatório" }),
  description: z.string().min(5, { message: "A mensagem é obrigatória" }),
});
