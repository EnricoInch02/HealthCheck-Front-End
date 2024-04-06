import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FullTestFormService } from '../../services/full-test-form.service';
import { RegisterService } from '../../services/register.service';
import { Registry } from '../../../models/register.model';
import { Test } from '../../../models/test.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent implements OnInit {
  @Output() typeChange: EventEmitter<string> = new EventEmitter<string>();
  model = this.testFormService.modelTest;
  allDoctor!: Registry[];
  allUser!: Registry[];
  userSession= this.loginService.getLoggedUser()

  types: any[] = [
    { value: 'BLOODTEST', viewValue: 'Sangue' },
    { value: 'URINETEST', viewValue: 'Urine' },
  ];


  constructor(
    private loginService: LoginService,
    private testFormService: FullTestFormService,
    private registryService: RegisterService
  ) {}

  ngOnInit(): void {
    this.getAllDoctor();
    this.getAllPatient();
  }

  changeType(type: string) {
    this.typeChange.emit(type);
  }

  handleDateSelection(event: any) {
    this.model.date = event.toISOString().split('T')[0];
  }

  getAllDoctor() {
    this.registryService.getAllByUsertype('ADMIN').subscribe((doctor) => {
      this.allDoctor = doctor;
    });
  }

  getAllPatient() {
    this.registryService.getAllByUsertype('USER').subscribe((user) => {
      this.allUser = user;
    });
  }
}
