
import { NextResponse } from "next/server";
import { CustomMiddleware } from './chain.middleware';

const PUBLIC_API_PATHS = [
    "/api/auth/login",
    "/api/auth/new-user",
];

export function cookieAuth(next: CustomMiddleware): CustomMiddleware {
  return async (req, event, response) => {
    const { pathname } = req.nextUrl;
    const host = req.headers.get("host") ?? "";

    const isAdminDomain = host.startsWith("admin.");
    const isApiRoute = pathname.startsWith("/api");
    const isPublicApi = PUBLIC_API_PATHS.some(path =>
      pathname.startsWith(path)
    );

    if (isAdminDomain && isApiRoute && !isPublicApi) {
      const hasSessionCookie = req.cookies.has("better-auth.session-token");

      if (!hasSessionCookie) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }
    }

    return next(req, event, response);
  };
}
