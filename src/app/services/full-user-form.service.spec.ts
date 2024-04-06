import { TestBed } from '@angular/core/testing';

import { FullUserFormService } from './full-user-form.service';

describe('FullUserFormService', () => {
  let service: FullUserFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullUserFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
