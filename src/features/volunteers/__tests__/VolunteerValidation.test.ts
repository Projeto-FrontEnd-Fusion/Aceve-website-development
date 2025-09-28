import { VolunteerValidation } from "../classes/VolunteerValidation"

const validator = new VolunteerValidation();

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
    expect(validator.validateEmail(email)).toBeFalsy();
  })

  test.each(emailTestTrueValues)("should return true for correct format email", (email) => {
    expect(validator.validateEmail(email)).toBeTruthy();
  })

})

describe("Volunteer phone validation", () => {
  const phoneTestFalseValues = [
    "    ", // blank
    "+55 (91) 9 0000-0000", // same number in xxx-xxx
    "+55 (91) 9 2222-2222", // same number in xxx-xxx
    "+55 (91) 8 0000-0000", // other number on the prefix istead of 9
    "+99 (77) 9 8956-5852", // other country code
    "+55 64 9 8956-5852", // no () in the area code
    "55 (64) 9 2587-9514", // no + in the country code 
    "9 5647-8954", // no country code and no area code
  ]
  const phoneTestTrueValues = [
    "+55 (11) 9 1234-4432",
    "+55 (64) 9 3355-4432",
  ]

  test.each(phoneTestFalseValues)("should return false for incorrect format phone", (phone) => {
    expect(validator.validatePhone(phone)).toBeFalsy();
  })
  test.each(phoneTestTrueValues)("should return true for correct format phone", (phone) => {
    expect(validator.validatePhone(phone)).toBeTruthy();
  })
})
