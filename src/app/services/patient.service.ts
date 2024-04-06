import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../../models/patient.model';
import { environment } from '../../environments/environment';
import { Registry, RegistryDTO } from '../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  patient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.BASE_URL_API}/registry/findByUsertype?usertype=USER`)
  }

  deletePatient(id: number) {
    return this.http.delete<Patient>(`${environment.BASE_URL_API}/user/delete?id=${id}`)
  }

  getAllPatientByDoctorId(idDoctor: any):Observable<Registry[]> {
    return this.http.get<Registry[]>(`${environment.BASE_URL_API}/registry/getAllPatientByDoctorId?idDoctor=${idDoctor}`);
  }
}