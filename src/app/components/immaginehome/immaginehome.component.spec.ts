import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmaginehomeComponent } from './immaginehome.component';

describe('ImmaginehomeComponent', () => {
  let component: ImmaginehomeComponent;
  let fixture: ComponentFixture<ImmaginehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmaginehomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmaginehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
