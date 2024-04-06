import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserDTO, UserList } from '../../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  findByEmailAndPassword(email: string, password: string): Observable<User> {
    const userSession = { email, password };
    return this.http.post<User>(
      `${environment.BASE_URL_API}/user/findbyemailandpassword`,
      userSession
    );
  }

  getAllUsers(): Observable<UserList[]> {
    return this.http.get<UserList[]>(`${environment.BASE_URL_API}/user/getall`);
  }

  deleteUser(id: number | null): Observable<UserList> {
    return this.http.delete<UserList>(
      `${environment.BASE_URL_API}/user/erase?id=${id}`
    );
  }

  insertUser(model: UserDTO) {
    return this.http.post<UserDTO>(
      `${environment.BASE_URL_API}/user/insert`,
      model
    );
  }

  readUser(idUser: number|null) {
    return this.http.get<UserList>(
      `${environment.BASE_URL_API}/user/read?id=${idUser}`
    );
  }

  updateUser(model: UserDTO) {
    return this.http.put<UserDTO>(
      `${environment.BASE_URL_API}/user/update`,
      model
    );
  }

  uploadImageUser(email:string, image: File ){
    const formData = new FormData();
    formData.append('email', email);
    formData.append('image', image);

    return this.http.post(`${environment.BASE_URL_API}/user/uploadProPic`, formData);
  }

  findByEmail(email: string){
    return this.http.get<UserList>(
      `${environment.BASE_URL_API}/user/findByEmail?email=${email}`
    );
  }
}
