import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTestFormComponent } from './full-test-form.component';

describe('FullTestFormComponent', () => {
  let component: FullTestFormComponent;
  let fixture: ComponentFixture<FullTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullTestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
