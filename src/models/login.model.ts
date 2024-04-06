export interface Login {
  email: string;
  password: string;
}

export class LoginDTO {
  constructor(public email: string = '', public password: string = '') {}
}

export interface UserSession {
  id:number
  email: string;
  usertype: string;
  pathImage: string;
}
