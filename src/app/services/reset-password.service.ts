import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResetPasswordDTO } from '../../models/resetPassword.mode';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  email!: string;

  constructor(private http: HttpClient) {}

  resetPassword(email: string) {
    this.email = email;
    return this.http.get(
      `${environment.BASE_URL_API}/user/resetPasswordEmail?email=${email}`
    );
  }

  changePassword(model: ResetPasswordDTO) {
    return this.http.post(
      `${environment.BASE_URL_API}/user/resetUserPassword`,
      model
    );
  }
}
