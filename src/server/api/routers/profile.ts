import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { profileEditSchema } from "~/validation/profile";

export const profileRouter = createTRPCRouter({
  edit: publicProcedure
    .input(profileEditSchema)
    .mutation(async ({ input, ctx }) => {
      const { username, email } = input;
      const id = ctx.session?.user.id;

      const result = await ctx.prisma.user.update({
        where: { id },
        data: { name: username, email },
      });

      return {
        status: 200,
        message: "Account updated successfully",
        result: result,
      };
    }),
  getCurrentUser: publicProcedure.query(async ({ ctx }) => {
    const id = ctx.session?.user.id;
    const result = await ctx.prisma.user.findFirst({
      where: { id },
    });

    return {
      status: 200,
      message: "Account updated successfully",
      result: result,
    };
  }),
});
