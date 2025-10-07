/**
 * @jest-environment node
 */
import { requestForTest } from "../utils/requestForTest";
import { POST } from '@/app/api/submit-volunteer/route'
import nodemailer from 'nodemailer'


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

    const request = requestForTest({
      volunteer: {
        name: "João Silva",
        email: "joao@email.com",
        phoneNumber: "11912344432",
        description: "Quero ser voluntário"
      }
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("ENV variables not found");
  });

  test("should return status 500 and message 'Error trying to send email' when email to ONG is rejected", async () => {
    mockSendMail.mockResolvedValueOnce({
      rejected: ['recipient@email.com'], // oNG email rejected
      messageId: 'message-1'
    });

    const request = requestForTest({
      volunteer: {
        name: "João Silva",
        email: "joao@gmail.com",
        phoneNumber: "11912344432",
        description: "Quero ser voluntário"
      }
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("Error trying to send email");
  });


  test("should return status 500 and message 'Error trying to send confirm email to volunteer' when confirmation email to volunteer is rejected", async () => {
    mockSendMail
      .mockResolvedValueOnce({
        rejected: [], // ONG email accepcted 
        messageId: 'message-1'
      })
      .mockResolvedValueOnce({
        rejected: ['volunteer@email.com'], // volunteer email rejected
        messageId: 'message-2'
      });

    const request = requestForTest({
      volunteer: {
        name: "João Silva",
        email: "joao@email.com",
        phoneNumber: "11912344432",
        description: "Quero ser voluntário"
      }
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("Error trying to send confirm email to volunteer");
  });


})
