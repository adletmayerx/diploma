// @/src/server/router.ts
import * as trpc from "@trpc/server";
import { hash } from "argon2";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { signUpSchema } from "~/validation/auth";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure.input(signUpSchema).query(async ({ input, ctx }) => {
    const { username, email, password } = input;

    const exists = await ctx.prisma.user.findFirst({ where: { email } });

    if (exists) {
      throw new trpc.TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      });
    }

    const hashedPassword = await hash(password);

    const result = await ctx.prisma.user.create({
      data: { name: username, email, password: hashedPassword },
    });

    return {
      status: 201,
      message: "Account created successfully",
      result: result.email,
    };
  }),
});

