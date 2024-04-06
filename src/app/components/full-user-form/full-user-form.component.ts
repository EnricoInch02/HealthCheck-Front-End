import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FullUserFormService } from '../../services/full-user-form.service';
import { NgForm } from '@angular/forms';
import { UserList } from '../../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-full-user-form',
  templateUrl: './full-user-form.component.html',
  styleUrl: './full-user-form.component.scss',
})
export class FullUserFormComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Input() mode!: string;
  @Input() userUpdate?: UserList;


  errorMessage = this.fullFormService.errorMessage;

  constructor(private fullFormService: FullUserFormService, private userService: UserService) {}
  ngOnInit(): void {
    this.fullFormService.userUpdate = this.userUpdate
    this.fullFormService.mode = this.mode
  }

  submitInsertForm() {
    this.fullFormService.submitForm();
    this.closeModal.emit();
  }

  submitUpdateForm(){
    this.fullFormService.updateForm()
    this.closeModal.emit();
  }



}
