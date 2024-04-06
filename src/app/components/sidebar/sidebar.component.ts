import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserSession } from '../../../models/login.model';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {

  userSession!: UserSession | null

  constructor(private loginService: LoginService){}


  ngOnInit(): void {
    this.userSession = this.loginService.getLoggedUser()
  }
}
