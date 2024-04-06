import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDTO, UserList } from '../../models/user.model';
import { RegistryDTO } from '../../models/register.model';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root',
})
export class FullUserFormService {
  modelUser: UserDTO = new UserDTO(null);
  modelRegistry: RegistryDTO = new RegistryDTO(null);
  image!: File;
  errorMessage: string = '';
  userUpdate!: UserList | undefined;
  mode!:string

  constructor(
    private userService: UserService,
    private registerService: RegisterService
  ) {}

  insertUser() {
    this.userService
      .insertUser(this.modelUser)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((user) => {
        this.readUserInsert(user!.email, user!.password);
      });
  }

  readUserInsert(email: string, password: string) {
    this.userService
      .findByEmailAndPassword(email, password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((user) => {
        this.modelRegistry.idUser = user!.id;
        this.insertRegistry();
      });
  }

  insertRegistry() {
    this.registerService
      .insertRegistry(this.modelRegistry)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe();
  }

  submitForm() {
    try {
      this.insertUser();
      setTimeout(() => {
        this.onUpload();
      }, 100);
    } catch {
      this.errorMessage = 'Inserimento fallito';
    }
  }

  updateForm() {
    try {
      this.updateUser();
      setTimeout(() => {
        this.onUpload();
      }, 100);
    } catch {
      this.errorMessage = 'Modifica fallita';
    }
  }

  updateUser() {
      this.userService
        .updateUser(this.modelUser)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorMessage = err.error;
            return of(undefined);
          })
        )
        .subscribe((user) => {
          this.updateRegistry();
        });
  }

  updateRegistry() {
    this.registerService
      .updateRegistry(this.modelRegistry)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe();
  }

  onUpload() {
    this.userService
      .uploadImageUser(this.modelUser.email, this.image)
      .subscribe();
  }
}
