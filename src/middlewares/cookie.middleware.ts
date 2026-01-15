
import { NextResponse } from "next/server";
import { CustomMiddleware } from './chain.middleware';
import { HttpMethod, PublicApiConfig } from "@/types/httpMethod.type";

const PUBLIC_API_ROUTES: PublicApiConfig = {
  "/api/auth/login": [HttpMethod.POST],
  "/api/events": [HttpMethod.GET]
};

const PRIVATE_FRONT_ROUTES = [
  "/dashboard",
];

export function cookieAuth(next: CustomMiddleware): CustomMiddleware {
  return async (req, event, response) => {
    const { pathname } = req.nextUrl;
    const method = req.method;
    const hasSessionCookie = req.cookies.has("better-auth.session_token");

    const isApiRoute = pathname.startsWith("/api");
    const isPublicApi = Object.entries(PUBLIC_API_ROUTES).some(
      ([path, allowedMethods]) => 
        pathname.startsWith(path) && allowedMethods.includes(method as HttpMethod)
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
