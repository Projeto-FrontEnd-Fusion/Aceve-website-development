import { prisma } from "@/utils/prisma"
import { CreateEventPersist } from "./dto/event-persist.dto";

export const EventRepository = async ()=> {

    const Create = async (data: CreateEventPersist)=> {
        return prisma.events.create({
            data: {
                ...data,
                photos: {
                    create: data.photos?.map(({ photoUrl, description }) => ({ photoUrl, description })) || [],
                },
            },
            include: { photos: true },
        });
    }

    return { Create } as const;
}