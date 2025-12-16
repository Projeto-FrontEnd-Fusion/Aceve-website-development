import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain.middleware";

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_APPURL!.replace(/^https?:\/\//, "");

function getDomain(hostname: string) {
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

export function subdomain(next: CustomMiddleware): CustomMiddleware {
    return async (req: NextRequest, event: NextFetchEvent, response: NextResponse) => {
        const host = req.headers.get("host") || "";
        const hostname = host.split(":")[0];
        const subdomain = getDomain(hostname);

        // Production domain
        if (subdomain === "admin") {
            const url = req.nextUrl;
            let rewriteResponse;

            // admin.domain.com/ → /admin
            if (url.pathname === "/") {
                rewriteResponse = NextResponse.rewrite(new URL("/admin", req.url));
            } else {
                // admin.domain.com/x → /admin/x
                rewriteResponse = NextResponse.rewrite(new URL(`/admin${url.pathname}`, req.url));
            }
            
            return rewriteResponse; 
        }

        return next(req, event, response);
    };
}