/**
 * @jest-environment node
 */
import nodemailer from 'nodemailer'
import { sendEmail } from "../services/sendEmail";

//Mocks
// mock nodemailer
jest.mock('nodemailer', () => {
  const mockSendMail = jest.fn();
  return {
    createTransport: jest.fn().mockReturnValue({
      sendMail: mockSendMail
    })
  };
});
const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

// mock nodemailer method sendMail
const mockSendMail = mockedNodemailer.createTransport().sendMail as jest.Mock;


// npm test -- -t "Send email to ong and volunteer" --verbose
describe("Send email to ong and volunteer", () => {
  beforeEach(() => {
    process.env.EMAIL_USER = 'test@mail.com';
    process.env.EMAIL_PASS = 'test-pass';

    mockSendMail.mockReset();
    mockSendMail.mockResolvedValue({
      messageId: 'test-message-id',
      response: '250 OK'
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return status 500 when env variables are missing", async () => {
    delete process.env.EMAIL_USER;
    delete process.env.EMAIL_PASS;

    const volunteer = {
      name: "João Silva",
      email: "joao@email.com",
      phoneNumber: "11912344432",
      description: "Quero ser voluntário"
    }

    await expect(sendEmail(volunteer)).rejects.toThrow("ENV variables not found");
  });

  test("should throw error 'Error trying to send email' when email to ONG is rejected", async () => {
    mockSendMail.mockResolvedValueOnce({
      rejected: ['recipient@email.com'], // oNG email rejected
      messageId: 'message-1'
    });

    const volunteer = {
      name: "João Silva",
      email: "joao@gmail.com",
      phoneNumber: "11912344432",
      description: "Quero ser voluntário"
    }

    await expect(sendEmail(volunteer)).rejects.toThrow("Error trying to send email");
  });


  test("should throw error 'Error trying to send confirm email to volunteer' when confirmation email to volunteer is rejected", async () => {
    mockSendMail
      .mockResolvedValueOnce({
        rejected: [], // ONG email accepcted 
        messageId: 'message-1'
      })
      .mockResolvedValueOnce({
        rejected: ['volunteer@email.com'], // volunteer email rejected
        messageId: 'message-2'
      });

    const volunteer = {
      name: "João Silva",
      email: "joao@email.com",
      phoneNumber: "11912344432",
      description: "Quero ser voluntário"
    }

    await expect(sendEmail(volunteer)).rejects.toThrow("Error trying to send confirm email to volunteer");

  });

  test("should finish without error when both emails are accepcted", async () => {
    mockSendMail
      .mockResolvedValueOnce({
        rejected: [], // ONG email accepcted 
        messageId: 'message-1'
      })
      .mockResolvedValueOnce({
        rejected: [], // volunteer email accepcted
        messageId: 'message-2'
      });

    const volunteer = {
      name: "João Silva",
      email: "joao@email.com",
      phoneNumber: "11912344432",
      description: "Quero ser voluntário"
    }

    await expect(sendEmail(volunteer)).resolves.not.toThrow();
  });



})
