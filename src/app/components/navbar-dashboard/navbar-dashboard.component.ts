import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RegisterService } from '../../services/register.service';
import { Registry } from '../../../models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrl: './navbar-dashboard.component.scss',
})
export class NavbarDashboardComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<void>();
  userRegistry!: Registry;
  userSession = this.loginService.getLoggedUser()

  constructor(
    public loginService: LoginService,
    private registerService: RegisterService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.registerService
      .readRegistryIdUser(this.loginService.getLoggedUser()!.id)
      .subscribe((user) => {
        this.userRegistry = user;
      });
  }

  toggleSidebar() {
    this.openSidebar.emit();
  }

  account(){
    this.router.navigate(["/dashboard/Profile"])
  }
}
