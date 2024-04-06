import { Registry } from './register.model';

export interface User {
  id: number | null;
  email: string;
  password: string;
  usertype: string;
  pathImage: string;
}

export class UserDTO {
  constructor(
    public id: number | null,
    public email: string = '',
    public password: string = '',
    public pathImage: string | null = null,
    public usertype: string = 'USER'
  ) {}
}

export interface UserList {
  id: number;
  email: string;
  password: string;
  usertype: string;
  pathImage: string;
  registry: Registry;
}
