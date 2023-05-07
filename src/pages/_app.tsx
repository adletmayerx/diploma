import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { withTRPC } from "@trpc/next";
import { api } from "~/utils/api";

import { type AppRouter } from "~/server/api/root";

import "~/styles/globals.css";
import { Layout } from "~/components";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      {router.pathname === "/register" || router.pathname === "/login" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
};

// export default withTRPC<AppRouter>({
//   config({ ctx }) {
//     const url = process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}/api/trpc`
//       : "http://localhost:3000/api/trpc";
//     return {
//       url,
//       headers: {
//         "x-ssr": "1",
//       },
//       session: ctx.session,

//     };
//   },
//   ssr: true,
// })(MyApp);

export default api.withTRPC(MyApp);
