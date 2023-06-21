import * as z from "zod";

export const profileEditSchema = z.object({
  username: z.string(),
  email: z.string().email(),
});

export type ProfileEditSchema = z.infer<typeof profileEditSchema>;
