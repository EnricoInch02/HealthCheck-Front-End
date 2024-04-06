import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserDashboardComponent } from './all-user-dashboard.component';

describe('AllUserDashboardComponent', () => {
  let component: AllUserDashboardComponent;
  let fixture: ComponentFixture<AllUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllUserDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
