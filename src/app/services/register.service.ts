import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, Registry } from '../../models/register.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(model: Register):Observable<Register>{
    return this.http.post<Register>(`${environment.BASE_URL_API}/user/registration`, model)
  }

  insertRegistry(model: Registry):Observable<Registry>{
    return this.http.post<Registry>(`${environment.BASE_URL_API}/registry/insert`, model)
  }

  readRegistryIdUser(idUser: number){
    return this.http.get<Registry>(`${environment.BASE_URL_API}/registry/findByUserFk?id=${idUser}`)
  }

  getAllRegistry():Observable<Registry[]>{
    return this.http.get<Registry[]>(`${environment.BASE_URL_API}/registry/getall`)
  }

  updateRegistry(model: Registry){
    return this.http.put<Registry>(`${environment.BASE_URL_API}/registry/update`, model)
  }

  getAllByUsertype(type: string): Observable<Registry[]> {
    return this.http.get<Registry[]>(
      `${environment.BASE_URL_API}/registry/findByUsertype?usertype=${type.toUpperCase()}`
    );
  }

  getAllPatientByDoctorId(id: number){
    return this.http.get<Registry[]>(
      `${environment.BASE_URL_API}/registry/getAllPatientByDoctorId?idDoctor=${id}`
    );
  }

  getAllDoctorByPatientId(id: number){
    return this.http.get<Registry[]>(
      `${environment.BASE_URL_API}/registry/getAllDoctorByPatientId?idPatient=${id}`
    );
  }
}
