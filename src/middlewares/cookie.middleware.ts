
import { NextResponse } from "next/server";
import { CustomMiddleware } from './chain.middleware';

const PUBLIC_API_PATHS = [
   "/api/auth/login",
];

export function cookieAuth(next: CustomMiddleware): CustomMiddleware {
  return async (req, event, response) => {

    const { pathname } = req.nextUrl;
    const isApiRoute = pathname.startsWith("/api");
    const isPublicApi = PUBLIC_API_PATHS.some(path =>
      pathname.startsWith(path)
    );

    if (isApiRoute && !isPublicApi) {
      const hasSessionCookie = req.cookies.has("better-auth.session-token");

      if (!hasSessionCookie) {
        return NextResponse.json(
          { error: "Não autorizado!" },
          { status: 401 }
        );
      }
    }

    return next(req, event, response);
  };
}
