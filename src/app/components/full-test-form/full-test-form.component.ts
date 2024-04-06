import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FullTestFormService } from '../../services/full-test-form.service';
import { Test } from '../../../models/test.model';

@Component({
  selector: 'app-full-test-form',
  templateUrl: './full-test-form.component.html',
  styleUrl: './full-test-form.component.scss',
})
export class FullTestFormComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Input() mode!: string;
  @Input() testUpdate!: Test;
  errorMessage: string = this.fullTestFormService.errorMessage;
  type!: string;

  constructor(private fullTestFormService: FullTestFormService) {}

  ngOnInit(): void {
    this.fullTestFormService.testUpdate = this.testUpdate;
    this.fullTestFormService.mode = this.mode
  }

  onTypeChange(type: string) {
    this.type = type;
  }

  submitInsertForm() {
    this.fullTestFormService.insertForm();
    this.closeModal.emit();
  }

  submitUpdateForm() {
    this.fullTestFormService.fullUpdateForm()
    this.closeModal.emit();
  }
}
