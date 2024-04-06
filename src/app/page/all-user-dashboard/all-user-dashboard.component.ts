import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-all-user-dashboard',
  templateUrl: './all-user-dashboard.component.html',
  styleUrl: './all-user-dashboard.component.scss'
})
export class AllUserDashboardComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{label: 'Dashboard', routerLink:'/dashboard'},{ label: 'Utenti' }];
      this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };

  }
  
}
