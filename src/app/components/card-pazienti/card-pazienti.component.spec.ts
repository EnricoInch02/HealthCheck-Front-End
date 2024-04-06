import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPazientiComponent } from './card-pazienti.component';

describe('CardPazientiComponent', () => {
  let component: CardPazientiComponent;
  let fixture: ComponentFixture<CardPazientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPazientiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPazientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
