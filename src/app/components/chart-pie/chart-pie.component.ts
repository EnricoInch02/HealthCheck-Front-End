import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user.model';
import { RegisterService } from '../../services/register.service';
import { Registry } from '../../../models/register.model';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.scss',
})
export class ChartPieComponent implements OnInit {
  doctors!: Registry[];
  patients!: Registry[];
  pieData: any;
  pieOptions: any;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.getAllAdmin();
    this.getAllUser();

    setTimeout(() => {
      this.pie();
    }, 500);
  }

  getAllAdmin() {
    this.registerService.getAllByUsertype('ADMIN').subscribe((doctor) => {
      this.doctors = doctor;
    });
  }

  getAllUser() {
    this.registerService.getAllByUsertype('USER').subscribe((doctor) => {
      this.patients = doctor;
    });
  }

  pie() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.pieData = {
      labels: ['Dottori', 'Pazienti'],
      datasets: [
        {
          data: [this.doctors.length, this.patients.length],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--blue-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--blue-400'),
          ],
        },
      ],
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
}
