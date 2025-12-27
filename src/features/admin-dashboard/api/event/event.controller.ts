import { NextRequest } from "next/server";
import { EventService } from "./event.service";

export const EventController = async () => {
    const eventService = await EventService();

    const CreateEvent = async (req: NextRequest) => {
        return await eventService.Create(await req.formData());
    }

    return { CreateEvent } as const;
};