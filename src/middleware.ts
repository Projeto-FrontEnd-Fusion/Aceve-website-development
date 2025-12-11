// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ROOT_DOMAIN = "violetaeliz.org.br";

function getSubdomain(hostname: string) {
  if (hostname.endsWith(".localhost") || hostname.endsWith(".127.0.0.1")) {
    return hostname.split(".")[0];
  }

  // Production domain
  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    return hostname.replace(`.${ROOT_DOMAIN}`, "");
  }

  // Vercel preview environments (admin---branch.vercel.app)
  if (hostname.includes("---") && hostname.endsWith(".vercel.app")) {
    return hostname.split("---")[0];
  }

  return null;
}

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const hostname = host.split(":")[0];
  const subdomain = getSubdomain(hostname);

  if (subdomain === "admin") {
    const url = req.nextUrl;

    // admin.domain.com/ → /admin
    if (url.pathname === "/") {
      return NextResponse.rewrite(new URL("/admin", req.url));
    }

    // admin.domain.com/x → /admin/x
    return NextResponse.rewrite(new URL(`/admin${url.pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[\\w-]+\\.\\w+).*)",
  ],
};

