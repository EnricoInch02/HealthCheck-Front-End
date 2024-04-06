import { Component } from '@angular/core';
import { Test } from '../../../models/test.model';
import { TestService } from '../../services/test.service';
import { LoginService } from '../../services/login.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-urine-test-dashboard',
  templateUrl: './urine-test-dashboard.component.html',
  styleUrl: './urine-test-dashboard.component.scss',
})
export class UrineTestDashboardComponent {
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
      { label: 'Referti', routerLink: '/dashboard/tests' },
      { label: 'Analisi delle Urine' },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };

    this.getLists();
  }

  getLists() {
    if (this.userSession?.usertype == 'SUPER') {
      this.testService.getAllByType('URINETEST').subscribe((test) => {
        this.allTest = test;
      });
    } else if (this.userSession?.usertype == 'ADMIN') {
      this.testService
        .getAllByTypeAndDoctor('URINETEST', this.userSession!.id)
        .subscribe((test) => {
          this.allTest = test;
        });
    } else {
      this.testService
        .getAllByTypeAndPatient('URINETEST', this.userSession!.id)
        .subscribe((test) => {
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
