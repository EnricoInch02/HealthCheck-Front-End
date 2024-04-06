import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { LoginService } from '../../services/login.service';
import { BloodTest } from '../../../models/bloodtest.model';
import { Test } from '../../../models/test.model';
import { LoginDTO } from '../../../models/login.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss'
})
export class HomeDashboardComponent implements OnInit {
  userSession= this.loginService.getLoggedUser()
  bloodTest!: Test[]
  urineTest!: Test[]
  test!: Test[]
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(private testService: TestService, private loginService: LoginService){}

  ngOnInit(): void {
    this.items = [{label: 'Dashboard', routerLink:'/dashboard'},];
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
    this.getBloodTest()
    this.getUrineTest()
    this.getTest()
  }


  getBloodTest(){
    if (this.userSession!.usertype == "SUPER") {
      this.testService.getAllByType("BLOODTEST").subscribe((test)=>{
        this.bloodTest= test
        console.log("all");
        
      })
    }else if(this.userSession!.usertype == "ADMIN"){
      this.testService.getAllByTypeAndDoctor("BLOODTEST", this.userSession!.id).subscribe((test)=>{
        this.bloodTest= test
        console.log("adm");
        
      })
    }else{
      this.testService.getAllByTypeAndPatient("BLOODTEST", this.userSession!.id).subscribe((test)=>{
        this.bloodTest= test
        console.log("us");
        
      })
    }
  }

  getUrineTest(){
    if (this.userSession!.usertype == "SUPER") {
      this.testService.getAllByType("URINETEST").subscribe((test)=>{
        this.urineTest= test
      })
    }else if(this.userSession!.usertype == "ADMIN"){
      this.testService.getAllByTypeAndDoctor("URINETEST", this.userSession!.id).subscribe((test)=>{
        this.urineTest= test
      })
    }else{
      this.testService.getAllByTypeAndPatient("URINETEST", this.userSession!.id).subscribe((test)=>{
        this.urineTest= test
      })
    }
  }

  getTest(){
    if (this.userSession!.usertype == "SUPER") {
      this.testService.getAll().subscribe((test)=>{
        this.test= test
      })
    }else if(this.userSession!.usertype == "ADMIN"){
      this.testService.getAllAdmin(this.userSession!.id).subscribe((test)=>{
        this.test= test
      })
    }else{
      this.testService.getAllPatient(this.userSession!.id).subscribe((test)=>{
        this.test= test
      })
    }
  }



  
}
