import z from "zod";

export const eventFormSchema = z.object({
  name: z.string().min(1, "O nome do evento é obrigatório."),
  description: z.string().optional(),
  total: z.string().min(1, "O valor total arrecadado é obrigatório."),
  beneficiaries: z
    .string({ error: "O número de pessoas beneficiadas é obrigatório." })
    .min(1, "O número de pessoas beneficiadas deve ser maior que zero."),
  date: z.string().min(1, "A data do evento é obrigatória."),
  photos: z
    .array(z.instanceof(File))
    .min(1, "É necessário pelo menos uma foto."),
});

export type EventFormData = z.infer<typeof eventFormSchema>;
