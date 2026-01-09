import { NextRequest, NextResponse } from "next/server";
import { EventService } from "../services/event.service";
import { FindLatestSchema } from "../schemas/find-latest.schema";

export const EventController = async () => {
    const eventService = await EventService();

    const CreateEvent = async (req: NextRequest) => {
        return await eventService.Create(await req.formData());
    }
    
    const FindLatest = async (req: NextRequest) => {
        const { searchParams } = new URL(req.url);
        const params = Object.fromEntries(searchParams.entries());
        const result = FindLatestSchema.safeParse(params);
        if (!result.success) {
            return NextResponse.json(JSON.parse(result.error.message), { status: 400 });
        }

        return await eventService.FindLatest(result.data);
    }

    return { CreateEvent, FindLatest } as const;
};
