import z from "zod";

export const CreateLoginSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(8),
});

export type CreateLogin = z.infer<typeof CreateLoginSchema>;