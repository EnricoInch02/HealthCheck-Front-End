export interface Register {
  email: string;
  password: string;
  usertype: string;
}

export class RegisterDTO {
  constructor(
    public email: string = '',
    public password: string = '',
    public usertype: string = ''
  ) {}
}

export interface Registry {
  id: number | null;
  name: string;
  surname: string;
  gender: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  city: string;
  address: string;
  bg: string;
  cf: string;
  idUser: number | null;
}

export class RegistryDTO {
  constructor(
    public id: number | null,
    public name: string = '',
    public surname: string = '',
    public gender: string = '',
    public birthDate: string = '',
    public birthPlace: string = '',
    public nationality: string = '',
    public city: string = '',
    public address: string = '',
    public bg: string = '',
    public cf: string = '',
    public idUser: number | null = null,
  ) {}
}
