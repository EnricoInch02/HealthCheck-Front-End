import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodtestFormComponent } from './bloodtest-form.component';

describe('BloodtestFormComponent', () => {
  let component: BloodtestFormComponent;
  let fixture: ComponentFixture<BloodtestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodtestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodtestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
