import { headers } from "next/headers";
import { NextResponse } from "next/server";
import auth from "../utils/auth";
import { LoginRequest, LoginSchema } from "./dtos/login.dto";
import { CreateLogin, CreateLoginSchema } from "./dtos/create.dto";

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

    const Create = async (data: CreateLogin): Promise<NextResponse> => {
        const createDto = await CreateLoginSchema.safeParseAsync(data);
        if (!createDto.success) {
            return NextResponse.json({ error: "Dados de solicitação inválidos!", details: createDto.error.cause }, { status: 400 });
        }

        const response = await auth.api.signUpEmail({
            body: {...createDto.data},
            headers: headers(),
            asResponse: true
        });

        return NextResponse.json(await response.json(), {status: 201});
    }
    
    return { Login, Create } as const;
}