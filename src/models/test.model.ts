import { BloodTest } from './bloodtest.model';
import { Registry } from './register.model';
import { UrineTest } from './urinetest.model';

export interface Test {
  id: number;
  doctor: string;
  patient: string;
  isChecked: boolean;
  date: string;
  type: string;
}

export class TestDTO {
  constructor(
    public id: number | null,
    public doctor: string = '',
    public patient: string = '',
    public isChecked: boolean = false,
    public date: string = '',
    public type: string = ''
  ) {}
}

export interface TestInsert {
  doctor: string;
  patient: string;
  isChecked: boolean;
  date: string;
  type: string;
  redBloodCell: number;
  whiteBloodCell: number;
  platelets: number;
  hemoglobin: number;
  color: number;
  ph: number;
  protein: number;
  hemoglobine: number;
}

export class TestInsertDTO {
  constructor(
    public doctor: string = "",
    public patient: string = "",
    public isChecked: boolean=false,
    public date: string = "",
    public type: string = "",
    public redBloodCell: number | null = null,
    public whiteBloodCell: number | null = null,
    public platelets: number | null = null,
    public hemoglobin: number | null = null,
    public color: number | null = null,
    public ph: number | null = null,
    public protein: number | null = null,
    public hemoglobine: number | null = null
  ) {}
}

export interface TestValidate {
  idTest: number;
  idUser: number;
}

export class TestValidateDTO {
  constructor(public idTest: number, public idUser: number) {}
}
