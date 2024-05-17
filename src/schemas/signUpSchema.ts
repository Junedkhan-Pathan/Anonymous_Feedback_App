import { z } from "zod";

export const userValidationSchema = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(20, "Username not be morethan 20 characterF")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special character");

export const signUpSchema = z.object({
  username: userValidationSchema,
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(6, "Password must be atleast 6 character"),
});
