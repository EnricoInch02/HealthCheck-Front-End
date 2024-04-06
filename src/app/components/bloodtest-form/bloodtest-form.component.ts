import { Component, OnInit } from '@angular/core';
import { FullTestFormService } from '../../services/full-test-form.service';
import { BloodTest, BloodTestDTO } from '../../../models/bloodtest.model';
import { TestService } from '../../services/test.service';
import { Test } from '../../../models/test.model';

@Component({
  selector: 'app-bloodtest-form',
  templateUrl: './bloodtest-form.component.html',
  styleUrl: './bloodtest-form.component.scss',
})
export class BloodtestFormComponent implements OnInit {
  model!: BloodTestDTO;
  mode: string = this.testFormService.mode;
  readBloodDTO!: BloodTest;
  testUpdate: Test = this.testFormService.testUpdate;

  constructor(
    private testFormService: FullTestFormService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    if (this.mode == 'insert') {
      this.model = new BloodTestDTO();
      this.testFormService.modelBloodTest = this.model;
    } else {
      this.readBlood();
    }
  }

  readBlood() {
    this.testService.readBlood(this.testUpdate.id).subscribe((read) => {
      this.readBloodDTO = read;
      this.isModel();
    });
  }

  isModel() {
    this.model = new BloodTestDTO(
      this.readBloodDTO.id,
      this.readBloodDTO.redBloodCell,
      this.readBloodDTO.whiteBloodCell,
      this.readBloodDTO.platelets,
      this.readBloodDTO.hemoglobin,
      this.readBloodDTO.idTest
    );
    this.testFormService.modelBloodTest = this.model;
  }
}
