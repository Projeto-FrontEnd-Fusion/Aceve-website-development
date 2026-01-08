import z from "zod";

export const CreateEventSchema = z.object({
  name: z.string().min(1, "O nome do evento é obrigatório."),
  description: z.string().optional(),
  totalFunding: z.string().min(1, "O valor total arrecadado é obrigatório."),
  peopleBenefited: z
    .string({ error: "O número de pessoas beneficiadas é obrigatório." })
    .refine((val) => !isNaN(Number(val)), {
      message: "O número de pessoas beneficiadas deve ser um número válido.",
    })
    .transform((value) => parseInt(value.replace(/\D/g, ""), 10))
    .refine((value) => value > 0, {
      message: "O número de pessoas beneficiadas deve ser maior que zero.",
    }),
  date: z.date({ error: "A data do evento é obrigatória." }),
  photos: z.array(
    z.object({
      file: z.instanceof(Buffer),
      description: z.string().optional(),
    })).min(1, "É necessário pelo menos uma foto."),
  }
);

export type CreateEvent = z.infer<typeof CreateEventSchema>;
