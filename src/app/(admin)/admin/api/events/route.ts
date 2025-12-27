import { EventController } from "@/features/admin-dashboard/api/event/event.controller";
import { NextRequest } from "next/server";

const controller = await EventController();

export async function POST(request: NextRequest) {
  return await controller.CreateEvent(request);
}