import { TestBed } from '@angular/core/testing';

import { ReasonService } from './reason.service';

describe('ReasonsService', () => {
  let service: ReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
