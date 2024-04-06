import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottoriComponent } from './dottori.component';

describe('DottoriComponent', () => {
  let component: DottoriComponent;
  let fixture: ComponentFixture<DottoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DottoriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DottoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
