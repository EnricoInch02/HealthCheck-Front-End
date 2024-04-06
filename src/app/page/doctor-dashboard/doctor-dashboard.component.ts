import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.scss'
})
export class DoctorDashboardComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{label: 'Dashboard', routerLink:'/dashboard'},{ label: 'Utenti' , routerLink: "/dashboadr/user" },{ label: 'Dottori' }];
      this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };

  }
}
