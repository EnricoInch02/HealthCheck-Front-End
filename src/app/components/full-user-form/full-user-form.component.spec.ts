import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullUserFormComponent } from './full-user-form.component';

describe('FullUserFormComponent', () => {
  let component: FullUserFormComponent;
  let fixture: ComponentFixture<FullUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullUserFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
