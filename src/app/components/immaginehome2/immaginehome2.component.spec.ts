import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Immaginehome2Component } from './immaginehome2.component';

describe('Immaginehome2Component', () => {
  let component: Immaginehome2Component;
  let fixture: ComponentFixture<Immaginehome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Immaginehome2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Immaginehome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
