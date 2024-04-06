import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../models/doctor.model';
import { DoctorService } from '../../doctor.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserSession } from '../../../models/login.model';
import { LoginService } from '../../services/login.service';
import { UserList } from '../../../models/user.model';
import { Registry } from '../../../models/register.model';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrl: './all-doctor.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AllDoctorComponent implements OnInit {
  doctorlist!: Registry[];
  doctorDetail: boolean = false;
  submitted: boolean = false;
  selctedDoctor!: Registry;
  userSession!: UserSession | null;

  constructor(
    private doctorService: DoctorService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userSession = this.loginService.getLoggedUser();
    if (this.userSession?.usertype == 'SUPER') {
      this.doctorService.doctor().subscribe((doctor) => {
        this.doctorlist = doctor;
      });
    } else {
      this.doctorService
        .getAllDoctorByPatientId(this.userSession?.id)
        .subscribe((doctor) => {
          this.doctorlist = doctor;
        });
    }
  }

  viewDoctor(doctor: Registry) {
    this.selctedDoctor = doctor
    this.doctorDetail = true;
  }
}
