import auth from "@/features/admin-login/api/libs/auth.config";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);