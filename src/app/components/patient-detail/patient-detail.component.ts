import { Component, Input } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { Registry } from '../../../models/register.model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrl: './patient-detail.component.scss',
})
export class PatientDetailComponent {
  patient: any;
  @Input() user!: Registry;

  constructor(
  ) {}
}
