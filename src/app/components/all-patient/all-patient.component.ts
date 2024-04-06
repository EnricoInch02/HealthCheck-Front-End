import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserSession } from '../../../models/login.model';
import { LoginService } from '../../services/login.service';
import { UserList } from '../../../models/user.model';
import { Registry } from '../../../models/register.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrl: './all-patient.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AllPatientComponent implements OnInit {
  patientlist!: Registry[];
  patientDetail: boolean = false;
  submitted: boolean = false;
  selectedPatient!: Registry;
  userSession!: UserSession | null;

  constructor(
    private patientService: PatientService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userSession = this.loginService.getLoggedUser();
    if (this.userSession?.usertype == 'SUPER') {
      this.patientService.patient().subscribe((patient) => {
        this.patientlist = patient;
      });
    } else {
      this.patientService
        .getAllPatientByDoctorId(this.userSession?.id)
        .subscribe((patient) => {
          this.patientlist = patient;
        });
    }
  }

  viewPatient(patient: Registry) {
    this.selectedPatient = patient
    this.patientDetail = true;
  }
}
