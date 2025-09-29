/**
 * @jest-environment node
 */
import { POST } from '../../../app/api/submit-volunteer/route'

const requestForTest = <T>(bodyContent?: T) => new Request("http://localhost:3000/api/submit-volunteer", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: bodyContent ? JSON.stringify(bodyContent) : null
})

//Mocks
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({
      messageId: 'test-message-id',
      response: '250 OK'
    })
  })
}));

process.env.EMAIL_USER = 'test@mail.com';
process.env.EMAIL_PASS = 'test-pass';



//  npm test -- -t "submit volunteer route api" --verbose
describe("submit volunteer route api", () => {
  test("should return status 400 and message 'Request Body cannot be empty' on empty body", async () => {
    const request = requestForTest();
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Request Body cannot be empty");
  })

  const requestMissingFields = [
    { email: "maria@email.com", phone: "11999999999" }, // missing full name
    { fullName: "Maria Silva", phone: "11999999999" }, // missing email
    { fullName: "Maria Silva", email: "maria@email.com" }, // missing phone
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


})
