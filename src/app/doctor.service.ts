import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Registry } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  doctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(
      `${environment.BASE_URL_API}/registry/findByUsertype?usertype=ADMIN`
    );
  }

  getAllDoctorByPatientId(idPatient: any):Observable<Registry[]> {
    return this.http.get<Registry[]>(`${environment.BASE_URL_API}/registry/getAllDoctorByPatientId?idPatient=${idPatient}`);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  patient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(
      `${environment.BASE_URL_API}/registry/findByUsertype?usertype=USER`
    );
  }

  
}
