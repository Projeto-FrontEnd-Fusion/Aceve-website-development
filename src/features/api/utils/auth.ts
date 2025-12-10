import { prisma } from "@/features/api/utils/prisma";
import { betterAuth,  } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export default betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
    },
    secret: process.env.BETTER_AUTH_SECRET!,
    trustedOrigins: [ process.env.BETTER_AUTH_URL!, ],
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
        }
    }
});