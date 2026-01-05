import { NextResponse } from "next/server";
import { uploadImage } from "../services/cloudinary.server";
import { prisma } from "@/utils/prisma";

export async function POST(request: Request) {
    try {
        const { base64, description, eventId } = await request.json();

        if (!base64) {
            return NextResponse.json(
                { error: "Imagem é obrigatória" },
                { status: 400 }
            )
        }

        const eventExists = await prisma.events.findUnique({
            where: { id: eventId }
        });

        if (!eventExists) {
            return NextResponse.json(
                { error: "Evento não encontrado" },
                { status: 404 }
            );
        }
        const uploadResult = await uploadImage(base64);

        if (!uploadResult?.secure_url) {
            throw new Error("Upload falhou: sem secure_url");
        }

        const photo = await prisma.photos.create({
            data: {
                photoUrl: uploadResult.secure_url,
                description: description ?? null,
                eventId,
            }
        })

        return NextResponse.json({ photo }), { status: 201 }

    } catch (error) {
        console.error("Error ao enviar imagem:", error);
        return NextResponse.json({ error: "Falha ao enviar imagem" }, { status: 500 });
    }
}
