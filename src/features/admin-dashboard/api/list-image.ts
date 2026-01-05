import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const eventIdParam = searchParams.get("eventId")

        if (!eventIdParam) {
            return NextResponse.json(
                { error: "eventId é obrigatório" },
                { status: 400 }
            );
        }

        const eventId = Number(eventIdParam)
        if (Number.isNaN(eventId)) {
            return NextResponse.json(
                { error: "eventId inválido" },
                { status: 400 }
            );
        }

        const photos = await prisma.photos.findMany({
            where: {
                eventId,
            },

            //adicionar data no prisma para ordenar por criação mais recente
            //orderBy: { createdAt: "desc" }

        })
        return NextResponse.json({ photos })
    } catch (error) {
        console.error("Error ao buscar fotos:", error)
        return NextResponse.json({ error: "Falha ao buscar fotos" }, { status: 500 })
    }
}
