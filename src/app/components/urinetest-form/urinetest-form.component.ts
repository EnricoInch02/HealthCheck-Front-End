import { Component, OnInit } from '@angular/core';
import { FullTestFormService } from '../../services/full-test-form.service';
import { UrineTest, UrineTestDTO } from '../../../models/urinetest.model';
import { TestService } from '../../services/test.service';
import { Test } from '../../../models/test.model';

@Component({
  selector: 'app-urinetest-form',
  templateUrl: './urinetest-form.component.html',
  styleUrl: './urinetest-form.component.scss',
})
export class UrinetestFormComponent implements OnInit {
  model!: UrineTestDTO;
  mode: string = this.testFormService.mode;
  readUrineDTO!: UrineTest;
  testUpdate: Test = this.testFormService.testUpdate;

  constructor(
    private testFormService: FullTestFormService,
    private testService: TestService
  ) {}
  ngOnInit(): void {
    if (this.mode == 'insert') {
      this.model = new UrineTestDTO();
      this.testFormService.modelUrineTest = this.model;
    } else {
      this.readUrine();
    }
  }

  readUrine() {
    this.testService.readUrine(this.testUpdate.id).subscribe((read) => {
      this.readUrineDTO = read;
      this.isModel();
    });
  }

  isModel() {
    this.model = new UrineTestDTO(
      this.readUrineDTO.id,
      this.readUrineDTO.color,
      this.readUrineDTO.ph,
      this.readUrineDTO.protein,
      this.readUrineDTO.hemoglobine,
      this.readUrineDTO.idTest
    );
    this.testFormService.modelUrineTest = this.model;
  }
}
