import { Component } from '@angular/core';
import { LoginDTO } from '../../../models/login.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ResetPasswordService } from '../../services/reset-password.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  hide: boolean = true;
  model = new LoginDTO();
  errorMessage: string= "";

  constructor(private loginService: LoginService, private router: Router, private resetPasswordService: ResetPasswordService) {}

  login() {
    this.loginService
      .login(this.model)
      .pipe(catchError((err: HttpErrorResponse) => {
        this.errorMessage= err.error
        return of(undefined);
      })
      ).subscribe((loggedUser)=>{
        if(loggedUser){
          this.router.navigate(["/dashboard"])
        }
      });
  }

  resetPassword(){
    this.resetPasswordService.resetPassword(this.model.email).subscribe()
  }
}
