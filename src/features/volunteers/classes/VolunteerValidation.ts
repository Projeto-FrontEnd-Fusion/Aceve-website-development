export class VolunteerValidation {
  // check the ./__tests__/VolunteerValidation.test.ts
  // to see which values pass and dont pass these regex
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  private phoneRegex = /^\+55\s\(\d{2}\)\s\d\s(?!(\d)\1{3}-\1{4})\d{4}-\d{4}$/

  validateEmail(email: string): boolean {
    return this.emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    return this.phoneRegex.test(phone);
  }
}
