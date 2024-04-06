export interface ResetPassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export class ResetPasswordDTO {
  constructor(
    public email: string = '',
    public oldPassword: string = '',
    public newPassword: string = ''
  ) {}
}
