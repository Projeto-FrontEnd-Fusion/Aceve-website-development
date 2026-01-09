import { prisma } from "@/utils/prisma";
import { CreateEventPersist } from "../types/event-persist";
import { OrderBy } from "../types/find-latest-event";

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

    const FindLatest = async (take: number, orderBy: OrderBy) => {
        return prisma.events.findMany({ orderBy, take,
            include: { photos: true },
        });
    }

    return { Create, FindLatest } as const;
}
 