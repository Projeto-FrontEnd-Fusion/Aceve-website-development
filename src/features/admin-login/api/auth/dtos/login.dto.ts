import z from "zod";

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string()
    .min(8)
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      "A senha deve conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e no mínimo 8 caracteres"
    ),
});

export type LoginRequest = z.infer<typeof LoginSchema>;