import { EventController } from "@/features/admin-dashboard/api/controllers/event.controller";
import { NextRequest } from "next/server";

const controller = await EventController();

export async function POST(request: NextRequest) {
  return await controller.CreateEvent(request);
}

export async function GET(request: NextRequest) {
  return await controller.FindLatest(request);
}