import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(32),
});

export const signUpSchema = loginSchema.extend({
  username: z.string(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;