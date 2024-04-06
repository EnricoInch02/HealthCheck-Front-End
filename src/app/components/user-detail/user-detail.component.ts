import { Component, Input } from '@angular/core';
import { User, UserList } from '../../../models/user.model';
import { UserService } from '../../services/user.service';
import { RegisterService } from '../../services/register.service';
import { Registry } from '../../../models/register.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  @Input() user!: UserList

  constructor(
    private userService: UserService,
    private registryService: RegisterService
  ) {}
}
