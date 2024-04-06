import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Immaginehome3Component } from './immaginehome3.component';

describe('Immaginehome3Component', () => {
  let component: Immaginehome3Component;
  let fixture: ComponentFixture<Immaginehome3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Immaginehome3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Immaginehome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
