import * as nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import { ZodError } from 'zod';
import { IVolunteer } from '@/features/volunteers/types/IVolunteer';
import { volunteerValidator } from '@/features/volunteers/utils/volunteerValidator';

export async function POST(request: Request) {
  // check env variables and request body
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    return NextResponse.json(
      { error: "ENV variables not found" },
      { status: 500 }
    )
  }


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
    if (!volunteer || !volunteer.name || !volunteer.email || !volunteer.phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 })
    }


    // volunteer information validation
    volunteerValidator.parse(volunteer)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass }
    })

    // first tries to send email to ONG, if successful send coonfirmation email to the volunteer
    const sendToOng = await transporter.sendMail({
      from: user,
      to: user,
      subject: "Serviço Voluntário",
      text: `
    Novo voluntário:
    
    Nome: ${volunteer.name}
    Tel: ${volunteer.phoneNumber}
    Mensagem: ${volunteer.description}
    `
    })
    // check if the email was rejected then return error
    if (sendToOng.rejected.length > 0) {
      return NextResponse.json(
        { error: "Error trying to send email" },
        { status: 502 }
      )
    }

    const sendConfirmToVolunteer = await transporter.sendMail({
      from: user,
      to: volunteer.email,
      subject: "Serviço Voluntário | Confirmação",
      text: volunteer.description
    })
    if (sendConfirmToVolunteer.rejected.length > 0) {
      return NextResponse.json(
        { error: "Error trying to send confirm email to volunteer" },
        { status: 502 }
      )
    }


  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Fields with invalid values" },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
  return NextResponse.json({ status: 200 })
}

