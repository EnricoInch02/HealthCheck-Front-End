import { Injectable, Input } from '@angular/core';
import { Test, TestDTO, TestInsertDTO } from '../../models/test.model';
import { TestService } from './test.service';
import { BloodTestDTO } from '../../models/bloodtest.model';
import { UrineTest, UrineTestDTO } from '../../models/urinetest.model';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { Registry } from 'chart.js/dist/core/core.registry';
import { RegistryDTO } from '../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class FullTestFormService {
  testUpdate!: Test;
  modelTest: TestDTO = new TestDTO(null);
  modelBloodTest: BloodTestDTO = new BloodTestDTO();
  modelUrineTest: UrineTestDTO = new UrineTestDTO();
  modelFullTest!: TestInsertDTO;
  errorMessage: string = '';
  readBloodDTO!: BloodTestDTO;
  readUrineDTO!: UrineTestDTO;
  userSession= this.loginService.getLoggedUser()
  userRegistry!: RegistryDTO
  mode!:string

  constructor(private testService: TestService, private loginService: LoginService, private registerService: RegisterService) {}

  insertForm() {
    this.registerService.readRegistryIdUser(this.userSession!.id).subscribe((registry)=>{
      this.userRegistry = registry
    })

    this.modelFullTest = new TestInsertDTO(
      this.modelTest.doctor = this.modelTest.doctor ? this.modelTest.doctor: this.userRegistry.id!.toString(),
      this.modelTest.patient = this.modelTest.patient ? this.modelTest.patient: this.userRegistry.id!.toString(),
      this.modelTest.isChecked,
      this.modelTest.date,
      this.modelTest.type,
      this.modelBloodTest.redBloodCell,
      this.modelBloodTest.whiteBloodCell,
      this.modelBloodTest.platelets,
      this.modelBloodTest.hemoglobin,
      this.modelUrineTest.color,
      this.modelUrineTest.ph,
      this.modelUrineTest.protein,
      this.modelUrineTest.hemoglobine
    );

    this.testService
      .insertTest(this.modelFullTest)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe();
  }

  fullUpdateForm() {
    if (this.testUpdate.type == 'BLOODTEST') {
      this.updateBlood();
    } else if (this.testUpdate.type == 'URINETEST') {
      this.updateUrine();
    }
  }

  updateBlood() {
    this.testService.updateBlood(this.modelBloodTest).subscribe();
  }

  updateUrine() {
    this.testService.updateUrine(this.modelUrineTest).subscribe();
  }

  


}
