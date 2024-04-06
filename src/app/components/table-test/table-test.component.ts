import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Test, TestValidateDTO } from '../../../models/test.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BloodTest } from '../../../models/bloodtest.model';
import { TestService } from '../../services/test.service';
import { AllTestDashboardComponent } from '../../page/all-test-dashboard/all-test-dashboard.component';
import { LoginService } from '../../services/login.service';
import { FullTestFormService } from '../../services/full-test-form.service';
import { UrineTestDashboardComponent } from '../../page/urine-test-dashboard/urine-test-dashboard.component';
import { TypeTestDashboardComponent } from '../../page/type-test-dashboard/type-test-dashboard.component';
import { Registry } from '../../../models/register.model';
import { RegisterService } from '../../services/register.service';

interface Status {
  name: string;
  code: boolean;
}

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrl: './table-test.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TableTestComponent implements OnInit {
  @Input() testList!: Test[];
  @Input() typeList!: string;
  @Output() aggiorna: EventEmitter<string> = new EventEmitter<string>();

  title!: string;
  productDialog: boolean = false;
  submitted: boolean = false;
  testValidate!: TestValidateDTO;
  userSession = this.loginService.getLoggedUser();
  mode!: string;
  testUpdate!: Test;
  url!: string;
  search: boolean = false;
  status: Status[] | undefined;
  selectedStatus!: boolean;
  allDoctor!: Registry[];
  allUser!: Registry[];
  searchDoctor!: number;
  searchPatient!: number;
  sort: boolean = false;
  viewTest!: Test;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private testService: TestService,
    private loginService: LoginService,
    private registryService: RegisterService
  ) {}

  ngOnInit(): void {
    this.getTitle();
    this.getAllDoctor();
    this.getAllPatient();

    this.status = [
      { name: 'Validati', code: true },
      { name: 'Da Validare', code: false },
    ];
  }

  isSearch() {
    this.search = !this.search;
  }

  getSeverity(status: string | boolean) {
    switch (status) {
      case 'BLOODTEST':
        return 'success';
      case 'URINETEST':
        return '';
      case true:
        return 'success';
      case false:
        return 'danger';
      default:
        return undefined;
    }
  }

  getType(type: string) {
    switch (type) {
      case 'BLOODTEST':
        return 'Sangue';
      case 'URINETEST':
        return 'Urine';
      default:
        return undefined;
    }
  }

  getTitle() {
    switch (this.typeList) {
      case 'all':
        return (this.title = 'Referti');
      case 'blood':
        return (this.title = 'Analisi del Sangue');
      case 'urine':
        return (this.title = 'Analisi delle Urine');
      default:
        return (this.title = 'Referti');
    }
  }

  openNew() {
    this.mode = 'insert';
    this.submitted = false;
    this.productDialog = true;
  }

  validate(item: Test) {
    this.testValidate = new TestValidateDTO(item.id, this.userSession!.id);
    this.testService.validate(this.testValidate).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Fatto!',
        detail: 'Test Validato',
        life: 3000,
      });
      this.aggiorna.emit();
    });
  }

  editProduct(item: Test) {
    this.mode = 'update';
    this.testUpdate = item;
    this.productDialog = true;
  }

  deleteProduct(item: Test) {
    this.confirmationService.confirm({
      message: 'Sei sicuro di voler eliminare le ' + (item.type == 'BLOODTEST' ? 'Analisi del Sangue' : 'Analisi delle Urine') + '?',
      header: 'Conferma',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.testService.deleteTest(item.id).subscribe(() => {
          this.aggiorna.emit();
          this.messageService.add({
            severity: 'success',
            summary: 'Fatto!',
            detail: 'Test eliminato',
            life: 3000,
          });
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
  }

  viewProduct(item: Test) {
    this.productDialog = true;
    this.mode = 'view';
    this.viewTest = item;
  }

  onHideDialog() {
    this.search = false;
    this.aggiorna.emit();
  }

  getAllDoctor() {
    if (this.userSession!.usertype == 'SUPER') {
      this.registryService.getAllByUsertype('ADMIN').subscribe((doctor) => {
        this.allDoctor = doctor;
      });
    } else if (this.userSession!.usertype == 'USER') {
      this.registryService
        .getAllDoctorByPatientId(this.userSession!.id)
        .subscribe((doctor) => {
          this.allDoctor = doctor;
        });
    }
  }

  getAllPatient() {
    if (this.userSession!.usertype == 'SUPER') {
      this.registryService.getAllByUsertype('USER').subscribe((user) => {
        this.allUser = user;
      });
    } else if (this.userSession!.usertype == 'ADMIN') {
      this.registryService
        .getAllPatientByDoctorId(this.userSession!.id)
        .subscribe((patient) => {
          this.allUser = patient;
        });
    }
  }

  searchByDoctor(id: number) {
    this.testService.searchByDoctor(id).subscribe((test) => {
      this.testList = test;
      this.search = false;
    });
  }

  searchByPatient(id: number) {
    this.testService.searchByPatient(id).subscribe((test) => {
      this.testList = test;
      this.search = false;
    });
  }

  searchByChecked(flag: boolean) {
    if (this.userSession!.usertype == 'SUPER') {
      this.testService.searchByChecked(flag).subscribe((test) => {
        this.testList = test;
        this.search = false;
      });
    } else if (this.userSession!.usertype == 'ADMIN') {
      this.testService
        .searchByCheckedAndDoctorId(flag, this.userSession!.id)
        .subscribe((test) => {
          this.testList = test;
          this.search = false;
        });
    } else {
      this.testService
        .searchByCheckedAndPatientId(flag, this.userSession!.id)
        .subscribe((test) => {
          this.testList = test;
          this.search = false;
        });
    }
  }

  sortDate() {
    const modifiedTestList = this.testList.map((test: Test) => {
      return { ...test, date: test.date.replace(/-/g, '') };
    });

    modifiedTestList.sort((a, b) => a.date.localeCompare(b.date));

    const modifiedWithHyphens = modifiedTestList.map((test: Test) => {
      const formattedDate = test.date.replace(
        /(\d{4})(\d{2})(\d{2})/,
        '$1-$2-$3'
      );
      return { ...test, date: formattedDate };
    });

    this.testList = modifiedWithHyphens.reverse();
  }

  toggleSort() {
    this.sort = !this.sort;
    if (this.sort) {
      this.sortDate();
    } else {
      this.aggiorna.emit();
    }
  }
}
