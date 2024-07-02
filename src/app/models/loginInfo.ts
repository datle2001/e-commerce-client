export class LoginInfo {
  constructor(public email: string, public password: string) {}

  public isReadyToSubmit(): boolean {
    return this.email !== '' && this.password !== '';
  }
}