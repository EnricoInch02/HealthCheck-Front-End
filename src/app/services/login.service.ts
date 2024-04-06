import { Injectable } from '@angular/core';
import { Login, UserSession } from '../../models/login.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient, private router:Router) {}


  login(model: Login): Observable<UserSession> {
    return this.http
      .post<UserSession>(`${environment.BASE_URL_API}/user/login`, model)
      .pipe(tap((user) => this.setLoggedUser(user)));
  }

  setLoggedUser(user: UserSession) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): UserSession | null {
    let userStorage = localStorage.getItem('user');
    if (userStorage != null) {
      let u: UserSession = JSON.parse(userStorage);
      return u;
    }
    return null;
  }

  get isUserLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate([""])
  }
}
