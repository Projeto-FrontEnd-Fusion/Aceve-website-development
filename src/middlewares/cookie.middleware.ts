
import { NextResponse } from "next/server";
import { CustomMiddleware } from './chain.middleware';

const PUBLIC_API_ROUTES = [
   "/api/auth/login",
   "/api/events"
];

const PRIVATE_FRONT_ROUTES = [
  "/dashboard",
];

export function cookieAuth(next: CustomMiddleware): CustomMiddleware {
  return async (req, event, response) => {
    const { pathname } = req.nextUrl;
    const hasSessionCookie = req.cookies.has("better-auth.session_token");

    const isApiRoute = pathname.startsWith("/api");
    const isPublicApi = PUBLIC_API_ROUTES.some(path =>
      pathname.startsWith(path)
    );

    const isFrontRoute = pathname.startsWith("/");
    const isPrivateFront = PRIVATE_FRONT_ROUTES.some(path =>
      pathname.startsWith(path)
    );

    if (isFrontRoute && isPrivateFront && !hasSessionCookie) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (isApiRoute && !isPublicApi && !hasSessionCookie) {
      return NextResponse.json(
        { error: "Não autorizado!" },
        { status: 401 }
      );
    }

    return next(req, event, response);
  };
}
