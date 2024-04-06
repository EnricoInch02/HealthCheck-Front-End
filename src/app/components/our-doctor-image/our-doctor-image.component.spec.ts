import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDoctorImageComponent } from './our-doctor-image.component';

describe('OurDoctorImageComponent', () => {
  let component: OurDoctorImageComponent;
  let fixture: ComponentFixture<OurDoctorImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurDoctorImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurDoctorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
