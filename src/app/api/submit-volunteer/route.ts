import { IVolunteer } from "@/features/volunteers/types/IVolunteer";
import * as nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import { VolunteerValidation } from "@/features/volunteers/classes/VolunteerValidation";

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

  const volunteer = await request.json()
    .catch(_error => {
      throw new Error("Request Body cannot be empty");
    }
    ) as IVolunteer;

  if (!volunteer.fullName || !volunteer.email || !volunteer.phone) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 })
  }



  // volunteer information validation
  const validation = new VolunteerValidation();
  if (!validation.validateEmail(volunteer.email)) {
    return NextResponse.json(
      { error: "Email with invalid format" },
      { status: 400 }
    )
  }
  if (!validation.validatePhone(volunteer.phone)) {
    return NextResponse.json(
      { error: "Phone with invalid format" },
      { status: 400 }
    )
  }

  // first tries to send email to ONG, if successful send coonfirmation email to the volunteer
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass }
    })

    const sendToOng = await transporter.sendMail({
      from: user,
      to: user,
      subject: "Serviço Voluntário",
      text: `
    Novo voluntário:
    
    Nome: ${volunteer.fullName}
    Tel: ${volunteer.phone}
    Mensagem: ${volunteer.message}
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
      text: volunteer.message
    })
    if (sendConfirmToVolunteer.rejected.length > 0) {
      return NextResponse.json(
        { error: "Error trying to send email" },
        { status: 502 }
      )
    }


  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500 }
    )
  }
  return NextResponse.json({ status: 200 })
}

