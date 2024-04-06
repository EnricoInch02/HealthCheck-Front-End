import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTestDashboardComponent } from './type-test-dashboard.component';

describe('TypeTestDashboardComponent', () => {
  let component: TypeTestDashboardComponent;
  let fixture: ComponentFixture<TypeTestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeTestDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeTestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
