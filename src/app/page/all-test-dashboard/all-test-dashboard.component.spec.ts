import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestDashboardComponent } from './all-test-dashboard.component';

describe('AllTestDashboardComponent', () => {
  let component: AllTestDashboardComponent;
  let fixture: ComponentFixture<AllTestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTestDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
