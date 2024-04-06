import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from '../../services/reset-password.service';
import { UserService } from '../../services/user.service';
import { ResetPasswordDTO } from '../../../models/resetPassword.mode';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.scss',
})
export class ResetPasswordFormComponent {
  email: string = this.resetPasswordService.email;
  model: ResetPasswordDTO = new ResetPasswordDTO(this.email);
  errorMessage!: string;

  constructor(
    private resetPasswordService: ResetPasswordService,
    private router: Router
  ) {}

  onSubmit() {
    this.resetPasswordService
      .changePassword(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((reset) => {
        this.router.navigate(['/landing/login']);
      });
  }
}
