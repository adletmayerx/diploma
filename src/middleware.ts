// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// // For the time being, the withAuth middleware only supports "jwt" as session strategy.
// export default withAuth(async function middleware(req) {
//   debugger;
//   const token = await getToken({ req });
//   // if token exists, !!token will be true
//   const isAuthenticated = !!token;

//   // first, check if the current path is login page
//   if (
//     req.nextUrl.pathname.startsWith("/login") ||
//     req.nextUrl.pathname.startsWith("/register")
//   ) {
//     debugger;

//     // I am in "login" page now  I check if the user is authenticated or not
//     if (isAuthenticated) {
//       // If I get here it means user is on "login" page and it is authenticated. then redirect it to whatever url
//       return NextResponse.redirect(new URL("/movies", req.url));
//     }
//   }
// });

// // specify on which routes you want to run the middleware
// export const config = {
//   matcher: ["/register", "/login"],
// };

import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = await getToken({ req });

    if (token && (path === "/login" || path === "/register")) {
      return NextResponse.redirect(new URL("/movies", req.url));
    }
  }
);

export const config = { matcher: ["/", "/login", "/register"] };
