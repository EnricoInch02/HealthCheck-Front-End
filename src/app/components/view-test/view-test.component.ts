import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../../models/test.model';
import { TestService } from '../../services/test.service';
import { BloodTest } from '../../../models/bloodtest.model';
import { UrineTest } from '../../../models/urinetest.model';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.scss',
})
export class ViewTestComponent implements OnInit {
  @Input() test!: Test;
  userSession = this.loginService.getLoggedUser();
  bloodTest!: BloodTest;
  urineTest!: UrineTest;

  constructor(
    private testService: TestService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (this.test.type == 'BLOODTEST') {
      this.testService.readBlood(this.test.id).subscribe((test) => {
        this.bloodTest = test;
      });
    } else if (this.test.type == 'URINETEST') {
      this.testService.readUrine(this.test.id).subscribe((test) => {
        this.urineTest = test;
      });
    }
  }
}
