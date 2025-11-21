import z from "zod";

export const formTaskSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .max(100, "Description must be at most 100 characters.")
    .optional(),
});
