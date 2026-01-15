import { NextResponse } from "next/server";
import { CreateEventSchema } from "../schemas/event.schema";
import { EventRepository } from "../repositories/event.repository";
import { CloudinaryService } from "./cloudinary.service";
import formDataEventToObject from "../utils/formDataEventToObject";
import { FindLatestEventParams } from "../types/find-latest-event";

export const EventService = async () => {
    const eventRepository = await EventRepository();
    const cloudinaryService = await CloudinaryService();

    const Create = async (data: FormData) => {
        const request = await formDataEventToObject(data);
        const eventDto = CreateEventSchema.safeParse(request);
        if (!eventDto.success) {
            return NextResponse.json(JSON.parse(eventDto.error.message), { status: 400 });
        }

        const photosResult: { photoUrl: string; description?: string }[] = [];
        try {
            for (const photo of eventDto.data.photos) {
                const uploadResult = await cloudinaryService.UploadImage(photo.file);
                photosResult.push({
                    photoUrl: uploadResult.secure_url, 
                    description: photo.description
                });
            }
        } catch (error) {
            console.error("❌ Erro ao fazer upload da imagem:", error);
            return NextResponse.json(
                { error: "Erro no upload de imagem", message: error instanceof Error ? error.message : "Erro desconhecido" }, 
                { status: 400 }
            );
        }
        
        const event = await eventRepository.Create({...eventDto.data, peopleBenefited: Number(eventDto.data.peopleBenefited), photos: photosResult}).catch((error) => {
            console.error("Error creating event:", error);
            return NextResponse.json({ message: "Erro ao criar o evento." }, { status: 500 });
        });
        
        return NextResponse.json(event, { status: 201 });
    }

    const FindLatest = async ({take, orderBy}: FindLatestEventParams) => {
        return NextResponse.json(await eventRepository.FindLatest(take, orderBy), { status: 200 });
    }

    return { Create, FindLatest } as const;
}
