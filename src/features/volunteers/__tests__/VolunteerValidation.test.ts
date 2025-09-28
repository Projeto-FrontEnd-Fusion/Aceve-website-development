import { VolunteerValidation } from "../classes/VolunteerValidation"

describe("Volunteer email validation", () => {
  const validator = new VolunteerValidation();

  // email
  const emailTestFalseValues = [
    "  ",
    "@mail.com",
    "user@.com"
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
