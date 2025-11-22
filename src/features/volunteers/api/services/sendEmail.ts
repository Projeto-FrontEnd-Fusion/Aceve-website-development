import * as nodemailer from 'nodemailer';
import { IVolunteer } from "../../types/IVolunteer";


export async function sendEmail(volunteer: IVolunteer) {
  // check env variables and request body
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    throw new Error("ENV variables not found")
  }


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass }
  })

  // first tries to send email to ONG, if successful send coonfirmation email to the volunteer
  const sendToOng = await transporter.sendMail({
    from: user,
    to: user,
    subject: "Serviço Voluntário 💜 | Novo voluntário",
    text: `
    Informações do voluntário:
    
    Nome: ${volunteer.name}
    Tel: ${volunteer.phoneNumber}
    Email: ${volunteer.email}
    Mensagem: ${volunteer.description}
    `
  })
  // check if the email was rejected then return error
  if (sendToOng.rejected.length > 0) {
    throw new Error("Error trying to send email")
  }

  const sendConfirmToVolunteer = await transporter.sendMail({
    from: user,
    to: volunteer.email,
    subject: "Serviço Voluntário Violeta Eliz 🌸 | Confirmação",
    text: `Olá ${volunteer.name} 💜,
Nós da Violeta Eliz ficamos felizes pelo seu interesse a se juntar a nossa causa e transformar vidas.
Recebemos as seguintes informações:

    Telefone: ${volunteer.phoneNumber}
    Email: ${volunteer.email}
    Mensagem: "${volunteer.description}" 

Em breve entraremos em contato 😊. 
`
  })
  if (sendConfirmToVolunteer.rejected.length > 0) {
    throw new Error("Error trying to send confirm email to volunteer")
  }


}
