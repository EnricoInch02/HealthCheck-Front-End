import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-angular';
  
  isLoggedUser:boolean = this.loginService.isUserLogged

  constructor(private loginService:LoginService){}
}
