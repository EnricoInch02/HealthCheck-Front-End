import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../models/doctor.model';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-our-doctor-cards',
  templateUrl: './our-doctor-cards.component.html',
  styleUrl: './our-doctor-cards.component.scss',
})
export class OurDoctorCardsComponent implements OnInit {
  doctorlist!: Doctor[];

  constructor(private doctorService: DoctorService) {}
  ngOnInit(): void {
    this.doctorService.doctor().subscribe((doctor)=>{
      this.doctorlist=doctor
    })
  }
  

}
