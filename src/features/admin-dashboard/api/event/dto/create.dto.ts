import z from "zod";

export const CreateEventSchema = z.object({
  name: z.string().min(1, "O nome do evento é obrigatório."),
  description: z.string().optional(),
  totalFunding: z.string().min(1, "O valor total arrecadado é obrigatório."),
  peopleBenefited: z
    .string({ error: "O número de pessoas beneficiadas é obrigatório." })
    .min(1, "O número de pessoas beneficiadas deve ser maior que zero."),
  date: z.date({ error: "A data do evento é obrigatória." }),
  photos: z.array(
    z.object({
      file: z.instanceof(Buffer),
      description: z.string().optional(),
    })).min(1, "É necessário pelo menos uma foto."),
  }
);

export type CreateEvent = z.infer<typeof CreateEventSchema>;
