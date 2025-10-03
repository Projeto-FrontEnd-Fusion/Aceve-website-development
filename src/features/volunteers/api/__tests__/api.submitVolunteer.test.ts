/**
 * @jest-environment node
 */
import { POST } from '@/app/api/submit-volunteer/route'
import nodemailer from 'nodemailer'

const requestForTest = <T>(bodyContent?: T) => new Request("http://localhost:3000/api/submit-volunteer", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: bodyContent ? JSON.stringify(bodyContent) : null
})

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

//  npm test -- -t "submit volunteer route api" --verbose
describe("submit volunteer route api", () => {
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
        fullName: "João Silva",
        email: "joao@email.com",
        phone: "11999999999"
      }
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("ENV variables not found");
  });


  test("should return status 400 and message 'Request Body cannot be empty' on empty body", async () => {
    const request = requestForTest();
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Request Body cannot be empty");
  })


  const requestMissingFields = [
    { email: "maria@email.com", phoneNumber: "11912344432", description: "Quero me voluntariar" }, // missing name
    { name: "Maria Silva", phoneNumber: "11912344432", description: "Quero me voluntariar" }, // missing email
    { name: "Maria Silva", email: "maria@email.com", description: "Quero me voluntariar" }, // missing phone
    {}, // missing all fields
  ];
  test.each(requestMissingFields)(
    "should return status 400 and message 'Missing required fields' on incomplete volunteer information",
    async (volunteer) => {
      const request = requestForTest({ volunteer });
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Missing required fields");
    }
  );


  test("should return status 400 and message 'Email with invalid format' on invalid email", async () => {
    const request = requestForTest({
      volunteer: {
        name: "João Silva",
        email: "@mail.com",
        phoneNumber: "11999999999",
        description: "Quero me voluntariar"
      }
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Fields with invalid values");
  });


  test("should return status 400 and message 'Fields with invalid values' on invalid phone", async () => {
    const request = requestForTest({
      volunteer: {
        name: "João Silva",
        email: "joao@email.com",
        phoneNumber: "123",
        description: "Quero me voluntariar"
      }
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Fields with invalid values");
  });


  test("should return status 502 and message 'Error trying to send email' when email to ONG is rejected", async () => {
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

    expect(response.status).toBe(502);
    expect(data.error).toBe("Error trying to send email");
  });


  test("should return status 502 and message 'Error trying to send confirm email to volunteer' when confirmation email to volunteer is rejected", async () => {
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

    expect(response.status).toBe(502);
    expect(data.error).toBe("Error trying to send confirm email to volunteer");
  });

})
