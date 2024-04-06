import { Component } from '@angular/core';
import { Test } from '../../../models/test.model';
import { TestService } from '../../services/test.service';
import { LoginService } from '../../services/login.service';
import { BloodTest } from '../../../models/bloodtest.model';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-type-test-dashboard',
  templateUrl: './type-test-dashboard.component.html',
  styleUrl: './type-test-dashboard.component.scss'
})
export class TypeTestDashboardComponent {
  allTest!: Test[];
  userSession = this.loginService.getLoggedUser()
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(private testService: TestService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.items = [{label: 'Dashboard', routerLink:'/dashboard'},{ label: 'Referti', routerLink:'/dashboard/tests' }, { label: 'Analisi del Sangue' }];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };

    this.getLists()
    
  }

  getLists(){
    if (this.userSession?.usertype == "SUPER") {
      this.testService.getAllByType("BLOODTEST").subscribe((test)=>{
        this.allTest = test;
      })
    }else if(this.userSession?.usertype == "ADMIN"){
      this.testService.getAllByTypeAndDoctor("BLOODTEST", this.userSession!.id).subscribe((test)=>{
        this.allTest = test;
      })
    }else{
      this.testService.getAllByTypeAndPatient("BLOODTEST", this.userSession!.id).subscribe((test)=>{
        this.allTest = test;
      })
    }
  }

  onChange(){
    setTimeout(()=>{
      this.getLists()
    }, 100)
  }
}
