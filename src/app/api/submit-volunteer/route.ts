import { IVolunteer } from "@/features/volunteers/types/IVolunteer";
import * as nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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
      return NextResponse.json(
        { error: "Request Body cannot be empty" },
        { status: 400 }
      )
    }
    ) as IVolunteer;


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
    Contato: ${volunteer.contact}
    Mensagem: ${volunteer.message}
    
  `
    })
    if (sendToOng.rejected.length > 0) {
      return NextResponse.json(
        { error: "Error trying to send email" },
        { status: 502 }
      )
    }


    const sendConfirmToVolunteer = await transporter.sendMail({
      from: user,
      to: volunteer.contact,
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

