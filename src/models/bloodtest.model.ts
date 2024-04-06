export interface BloodTest {
  id: number;
  redBloodCell: number;
  whiteBloodCell: number;
  platelets: number;
  hemoglobin: number;
  idTest: number;
}

export class BloodTestDTO {
  constructor(
    public id: number | null = null,
    public redBloodCell: number | null = null,
    public whiteBloodCell: number | null = null,
    public platelets: number | null = null,
    public hemoglobin: number | null = null,
    public idTest: number | null = null
  ) {}
}
