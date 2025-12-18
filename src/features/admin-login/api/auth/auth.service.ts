import { headers } from "next/headers";
import { NextResponse } from "next/server";
import auth from "../utils/auth";
import { LoginRequest, LoginSchema } from "./dtos/login.dto";

export const AuthService = async () => {

    const Login = async (data: LoginRequest): Promise<NextResponse> => {
        const loginDto = await LoginSchema.safeParseAsync(data);
        if (!loginDto.success) {
            return NextResponse.json({ error: "Dados de solicitação inválidos!", details: loginDto.error.cause }, { status: 400 });
        }

        const response = await auth.api.signInEmail({ body: {...loginDto.data}, headers: headers(), asResponse: true });
        if (!response.ok) {
            return NextResponse.json({ error: "E-mail ou senha inválidos." }, {status: 400});
        }
        
        return NextResponse.json(await response.json(), {status: 200});
    }

    const GetSession = async () => {
        return await auth.api.getSession({
            headers: headers() 
        });
    }
    
    return { Login, GetSession } as const;
}