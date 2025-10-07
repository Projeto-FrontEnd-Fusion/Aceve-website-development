/**
 * @jest-environment node
 */
import { POST } from '@/app/api/submit-volunteer/route'
import { requestForTest } from '../utils/requestForTest';


//  npm test -- -t "submit volunteer route api" --verbose
describe("submit volunteer route api", () => {
  beforeEach(() => {
    process.env.EMAIL_USER = 'test@mail.com';
    process.env.EMAIL_PASS = 'test-pass';

  });
  afterEach(() => {
    jest.clearAllMocks();
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
    {}, // request missing all fields
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


  test("should return status 200 on a properly made request", async () => {
    const request = requestForTest({
      volunteer: {
        name: "João Silva",
        email: "joao@gmail.com",
        phoneNumber: "11912344432",
        description: "Quero ser voluntário"
      }
    });
    const response = await POST(request);

    expect(response.status).toBe(200);


  })


})
