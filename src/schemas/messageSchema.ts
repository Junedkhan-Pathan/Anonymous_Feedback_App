import { z } from "zod";

export const messageValidationSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be atleast 10 characters" })
    .max(300, { message: "Content must not be morethan 300 characters" }),
});
