import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import auth from "../utils/auth";
import { LoginRequest, LoginSchema } from "./dtos/login.dto";

export const AuthService = async () => {

    const Login = async (data: LoginRequest): Promise<NextResponse> => {
        const loginDto = await LoginSchema.safeParseAsync(data);
        if (!loginDto.success) {
            return NextResponse.json({ error: "Dados de solicitação inválidos!", details: loginDto.error.cause }, { status: 400 });
        }

        const response = await auth.api.signInEmail({ body: {...loginDto.data}, headers: headers(), asResponse: true });
        const cookies = response.headers.get("set-cookie");
        
        return NextResponse.json(await response.json(), {status: 200, headers:{"Set-Cookie": cookies!}});
    }

    const GetSession = async (request: NextRequest): Promise<NextResponse> => {
        const response = await auth.api.getSession({ headers: request.headers, asResponse: true });
        if (!response.ok) {
            return NextResponse.json({ error: "Não autenticado!" }, { status: 401 });
        }
        return NextResponse.json(await response.json(), {status: 200});
    }
    
    return { Login, GetSession } as const;
}