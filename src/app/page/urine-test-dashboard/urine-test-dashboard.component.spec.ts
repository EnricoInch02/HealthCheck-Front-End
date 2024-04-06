import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrineTestDashboardComponent } from './urine-test-dashboard.component';

describe('UrineTestDashboardComponent', () => {
  let component: UrineTestDashboardComponent;
  let fixture: ComponentFixture<UrineTestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrineTestDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrineTestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
