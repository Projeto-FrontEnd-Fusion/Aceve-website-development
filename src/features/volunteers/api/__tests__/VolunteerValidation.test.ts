import { volunteerFormValidator } from "../../utils/volunteerFormValidator";

// npm test -- -t "Volunteer email validation" --verbose
describe("Volunteer email validation", () => {
  const emailTestFalseValues = [
    "  ", // blank
    "@mail.com", // no value before @domain.com
    "user@.com", // no domain
    "user.domain.com" // no @
  ]
  const emailTestTrueValues = [
    "user@gmail.com",
    "user.adm@outlook.com",
    "user@other.domain.com"
  ]

  test.each(emailTestFalseValues)("should return false for incorrect format email", (email) => {
    const validation = volunteerFormValidator.safeParse({
      name: "Ana Santos",
      phoneNumber: "91900000000",
      email,
      description: "Quero ser voluntária"
    })
    expect(validation.error).toBeTruthy();

  })

  test.each(emailTestTrueValues)("should return true for correct format email", (email) => {
    const validation = volunteerFormValidator.safeParse({
      name: "Ana Santos",
      phoneNumber: "91900000000",
      email,
      description: "Quero ser voluntária"
    })

    expect(validation.success).toBeTruthy();
  })

})

// npm test -- -t "Volunteer phone validation" --verbose
describe("Volunteer phone validation", () => {
  const phoneTestFalseValues = [
    "    ",
    // (91) 9 0000-00000
    "918000000000", // 12 caracteres
    // 9 5647-8954
    "956478954", // no area code
  ]
  const phoneTestTrueValues = [
    "11912344432", // (11) 9 1234-4432
    "64933554432", // (64) 9 3355-4432
  ]

  test.each(phoneTestFalseValues)("should return false for incorrect format phone", (phoneNumber) => {
    const validation = volunteerFormValidator.safeParse({
      name: "Ana Santos",
      phoneNumber,
      email: "user@gmail.com",
      description: "Quero ser voluntária"
    })


    expect(validation.error).toBeTruthy();
  })
  test.each(phoneTestTrueValues)("should return true for correct format phone", (phoneNumber) => {
    const validation = volunteerFormValidator.safeParse({
      name: "Ana Santos",
      phoneNumber,
      email: "user@gmail.com",
      description: "Quero ser voluntária"
    })


    expect(validation.success).toBeTruthy();
  })
})
