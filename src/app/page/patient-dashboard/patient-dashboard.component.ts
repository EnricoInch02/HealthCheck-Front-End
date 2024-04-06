import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss',
})
export class PatientDashboardComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', routerLink: '/dashboard' },
      { label: 'Utenti', routerLink: '/dashboadr/user' },
      { label: 'Pazienti' },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
  }
}
