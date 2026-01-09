import z from "zod";

export const FindLatestSchema = z.object({
  take: z.coerce.number({error: "O campo 'take' deve ser um número."})
  .positive("O valor deve ser maior que zero.").default(10),
  orderBy: z.enum(["asc", "desc"], {
    error: () => ({ message: "O campo 'orderBy' deve ser 'asc' ou 'desc'." }),
  }).default("desc").transform((date) => ({ date })), 
});

export type FindLatestSchema = z.infer<typeof FindLatestSchema>;