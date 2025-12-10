import { AuthController } from "@/features/api/auth/auth.controller";
import { NextRequest } from "next/server";

const authController = await AuthController();

export async function POST(req: NextRequest) {
    return await authController.Login(req);
}