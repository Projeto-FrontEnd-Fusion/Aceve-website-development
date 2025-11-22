import { NextResponse } from "next/server";
import { ZodError } from 'zod';
import { IVolunteer } from '@/features/volunteers/types/IVolunteer';
import { volunteerValidator } from '@/features/volunteers/utils/volunteerValidator';
import { sendEmail } from "@/features/volunteers/api/services/sendEmail";

export async function POST(request: Request) {

  try {
    const bodyText = await request.text();
    // empty body request
    if (!bodyText || bodyText.trim() === '') {
      return NextResponse.json(
        { error: "Request Body cannot be empty" },
        { status: 400 })
    }

    const body = JSON.parse(bodyText);
    // check body request fields
    const volunteer = body.volunteer as IVolunteer
    if (!volunteer || !volunteer.name || !volunteer.email || !volunteer.phoneNumber || !volunteer.description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 })
    }

    // volunteer information validation
    volunteerValidator.parse(volunteer)

    await sendEmail(volunteer);

  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Fields with invalid values" },
        { status: 400 }
      )
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
  return NextResponse.json({ status: 200 })
}

