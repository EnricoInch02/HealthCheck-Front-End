import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Test,
  TestDTO,
  TestInsert,
  TestInsertDTO,
  TestValidateDTO,
} from '../../models/test.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UpperCasePipe } from '@angular/common';
import { BloodTest, BloodTestDTO } from '../../models/bloodtest.model';
import { UrineTest, UrineTestDTO } from '../../models/urinetest.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  cf!: string;
  id!: number;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(`${environment.BASE_URL_API}/test/getall`);
  }

  getAllAdmin(idDoctor: number): Observable<Test[]> {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByDoctor?doctor=${idDoctor}`
    );
  }

  getAllPatient(idPatient: number): Observable<Test[]> {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByPatient?patient=${idPatient}`
    );
  }

  getAllByType(type: string): Observable<Test[]> {
    return this.http.get<Test[]>(
      `${
        environment.BASE_URL_API
      }/test/findAllByType?type=${type!.toUpperCase()}`
    );
  }

  getAllByTypeAndDoctor(type: string, id: number) {
    return this.http.get<Test[]>(
      `${
        environment.BASE_URL_API
      }/test/findAllByTypeAndDoctorId?type=${type!.toUpperCase()}&doctor=${id}`
    );
  }

  getAllByTypeAndPatient(type: string, id: number) {
    return this.http.get<Test[]>(
      `${
        environment.BASE_URL_API
      }/test/findAllByTypeAndPatientId?type=${type!.toUpperCase()}&patient=${id}`
    );
  }

  deleteTest(id: number): Observable<Test> {
    return this.http.delete<Test>(
      `${environment.BASE_URL_API}/test/delete?id=${id}`
    );
  }

  insertTest(model: TestInsertDTO) {
    return this.http.post<TestInsertDTO>(
      `${environment.BASE_URL_API}/test/addReport`,
      model
    );
  }

  validate(model: TestValidateDTO) {
    return this.http.post<Test>(
      `${environment.BASE_URL_API}/test/validate`,
      model
    );
  }

  updateTest(model: TestDTO) {
    return this.http.put<TestDTO>(
      `${environment.BASE_URL_API}/test/edit`,
      model
    );
  }

  updateBlood(model: BloodTestDTO) {
    return this.http.put<BloodTestDTO>(
      `${environment.BASE_URL_API}/bloodtest/edit`,
      model
    );
  }

  updateUrine(model: UrineTestDTO) {
    return this.http.put<UrineTestDTO>(
      `${environment.BASE_URL_API}/urinetest/edit`,
      model
    );
  }

  readBlood(id: number) {
    return this.http.get<BloodTest>(
      `${environment.BASE_URL_API}/bloodtest/findByTestFk?id=${id}`
    );
  }

  readUrine(id: number) {
    return this.http.get<UrineTest>(
      `${environment.BASE_URL_API}/urinetest/findByTestFk?id=${id}`
    );
  }

  searchByDoctor(id: number) {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByDoctor?doctor=${id}`
    );
  }

  searchByPatient(id: number) {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByPatient?patient=${id}`
    );
  }

  searchByChecked(flag: boolean) {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByIsChecked?isChecked=${flag}`
    );
  }

  searchByData(date: string) {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByDate?date=${date}`
    );
  }

  searchByCheckedAndPatientId(flag: boolean, id: number) {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByIsCheckedAndPatientId?isChecked=${flag}&patient=${id}`
    );
  }

  searchByCheckedAndDoctorId(flag: boolean, id: number) {
    return this.http.get<Test[]>(
      `${environment.BASE_URL_API}/test/findAllByIsCheckedAndDoctorId?isChecked=${flag}&doctor=${id}`
    );
  }
}
