export interface UrineTest {
    id: number;
    color: number;
    ph: number;
    protein: number;
    hemoglobine: number;
    idTest: number;
  }
  
  export class UrineTestDTO {
    constructor(
      public id: number | null = null,
      public color: number | null = null,
      public ph: number | null = null,
      public protein: number | null = null,
      public hemoglobine: number | null = null,
      public idTest: number | null = null
    ) {}
  }
  