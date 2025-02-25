import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazientiComponent } from './pazienti.component';

describe('PazientiComponent', () => {
  let component: PazientiComponent;
  let fixture: ComponentFixture<PazientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PazientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PazientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
