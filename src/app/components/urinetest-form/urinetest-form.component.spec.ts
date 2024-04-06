import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinetestFormComponent } from './urinetest-form.component';

describe('UrinetestFormComponent', () => {
  let component: UrinetestFormComponent;
  let fixture: ComponentFixture<UrinetestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrinetestFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrinetestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
