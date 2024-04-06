import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../../models/test.model';
import { TestService } from '../../services/test.service';
import { LoginService } from '../../services/login.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-all-test-dashboard',
  templateUrl: './all-test-dashboard.component.html',
  styleUrl: './all-test-dashboard.component.scss',
})
export class AllTestDashboardComponent implements OnInit {
  allTest!: Test[];
  userSession = this.loginService.getLoggedUser();
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private testService: TestService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', routerLink: '/dashboard' },
      { label: 'Referti' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };

    this.getLists();
  }

  getLists() {
    if (this.userSession?.usertype == 'SUPER') {
      this.testService.getAll().subscribe((test) => {
        this.allTest = test;
      });
    } else if (this.userSession?.usertype == 'ADMIN') {
      this.testService.getAllAdmin(this.userSession!.id).subscribe((test) => {
        this.allTest = test;
      });
    } else {
      this.testService.getAllPatient(this.userSession!.id).subscribe((test) => {
        this.allTest = test;
      });
    }
  }

  onChange() {
    setTimeout(() => {
      this.getLists();
    }, 100);
  }
}
