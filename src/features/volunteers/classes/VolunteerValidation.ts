export class VolunteerValidation {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  private phoneRegex = /^\+\d{1,3}\s\(\d{2}\)\s\d\s\d{4}-\d{4}$/  // +99 (99) 9 9999-9999
  validateEmail(email: string): boolean {
    return this.emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    return this.phoneRegex.test(phone);
  }
}
