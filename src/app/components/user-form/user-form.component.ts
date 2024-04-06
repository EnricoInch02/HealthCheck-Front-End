import { Component, Input, OnInit } from '@angular/core';
import { User, UserDTO, UserList } from '../../../models/user.model';
import { UserService } from '../../services/user.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { FullUserFormService } from '../../services/full-user-form.service';

interface Type {
  name: string;
  code: string;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  @Input() userUpdate?: UserList;

  hide: boolean = false;
  model!: UserDTO;
  errorMessage: string = this.fullFormService.errorMessage;
  userSession = this.loginService.getLoggedUser();
  selectType!: Type | undefined;
  types!: Type[];
  mode: string = this.fullFormService.mode;

  constructor(
    private fullFormService: FullUserFormService,
    private loginService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.mode == 'insert') {
      this.model = new UserDTO(null);
      this.fullFormService.modelUser = this.model
    } else if(this.mode == "update") {
      this.model = new UserDTO(
        this.userUpdate!.id,
        this.userUpdate!.email,
        this.userUpdate!.password,
        this.userUpdate!.pathImage,
        this.userUpdate!.usertype
      );
      this.fullFormService.modelUser = this.model
    }

    this.types = [
      { name: 'Dottore', code: 'ADMIN' },
      { name: 'Paziente', code: 'USER' },
    ];
  }

  onUpload(event: any) {
    const file: File = event.files[0];
    this.fullFormService.image = file;
  }
}
