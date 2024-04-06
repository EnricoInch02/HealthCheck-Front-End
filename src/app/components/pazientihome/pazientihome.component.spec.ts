import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazientihomeComponent } from './pazientihome.component';

describe('PazientihomeComponent', () => {
  let component: PazientihomeComponent;
  let fixture: ComponentFixture<PazientihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PazientihomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PazientihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
