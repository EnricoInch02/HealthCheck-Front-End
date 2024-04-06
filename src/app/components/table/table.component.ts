import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Registry } from '../../../models/register.model';
import { UserService } from '../../services/user.service';
import { User, UserList } from '../../../models/user.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FullUserFormService } from '../../services/full-user-form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TableComponent implements OnInit {
  userList!: UserList[];
  viewDialog: boolean = false;
  selectedProduct!: UserList;
  productDialog: boolean = false;
  userUpdate!: UserList;
  selectedUser!: UserList[] | null;
  submitted: boolean = false;
  statuses!: any[];
  mode!: string;

  constructor(
    private userService: UserService,
    private registryService: RegisterService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fullFormService: FullUserFormService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      users.map((user) => {
        this.registryService
          .readRegistryIdUser(user.id)
          .subscribe((userRegistry) => {
            user.registry = userRegistry;
          });
      });
      this.userList = users;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'SUPER':
        return 'warning';
      case 'ADMIN':
        return 'success';
      case 'USER':
        return '';
      default:
        return undefined;
    }
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
    this.mode = 'insert';
    this.fullFormService.mode = this.mode
  }

  editProduct(user: UserList) {
    this.mode = 'update';
    this.productDialog = true;
    this.userUpdate = user;
    this.fullFormService.mode = this.mode
  }

  viewProduct(user: any) {
    this.selectedProduct = user;
    this.viewDialog = true;
  }

  deleteProduct(user: UserList) {
    this.confirmationService.confirm({
      message: 'Sei sicuro di voler eliminare ' + user.registry.name + '?',
      header: 'Conferma',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteUser(user.id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Fatto!',
            detail: 'Utente eliminato',
            life: 3000,
          });
          this.getAllUsers();
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    setTimeout(() => {
      this.getAllUsers();
    }, 100);
  }
}
