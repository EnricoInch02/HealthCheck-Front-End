import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDoctorCardsComponent } from './our-doctor-cards.component';

describe('OurDoctorCardsComponent', () => {
  let component: OurDoctorCardsComponent;
  let fixture: ComponentFixture<OurDoctorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurDoctorCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurDoctorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
