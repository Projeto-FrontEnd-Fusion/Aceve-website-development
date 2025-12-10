import { NextRequest } from "next/server";
import { AuthService } from "./auth.service";


export const AuthController = async () => {
    const service = await AuthService();

    const Login = async (request: NextRequest) => {
        return await service.Login(await request.json());
    }

    const Create = async (request: NextRequest) => {
        return await service.Create(await request.json());
    }

    return { Login, Create } as const;
}