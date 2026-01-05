import { NextResponse } from "next/server";
import { CreateEventSchema } from "../schemas/event.schema";
import { EventRepository } from "../repositories/event.repository";
import { CloudinaryService } from "../lib/cloudinary.service";
import formDataEventToObject from "../lib/formDataEventToObject";

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
        for (const photo of eventDto.data.photos) {
            const uploadResult = await cloudinaryService.UploadImage(photo.file);
            photosResult.push({
                photoUrl: uploadResult.secure_url, 
                description: photo.description
            });
        }
        
        const event = await eventRepository.Create({...eventDto.data,peopleBenefited: Number(eventDto.data.peopleBenefited), photos: photosResult}).catch((error) => {
            console.error("Error creating event:", error);
            return NextResponse.json({ message: "Erro ao criar o evento." }, { status: 500 });
        });
        
        return NextResponse.json(event, { status: 201 });
    }

    return { Create } as const;
}
