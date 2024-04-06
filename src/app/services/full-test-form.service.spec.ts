import { TestBed } from '@angular/core/testing';

import { FullTestFormService } from './full-test-form.service';

describe('FullTestFormService', () => {
  let service: FullTestFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullTestFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
