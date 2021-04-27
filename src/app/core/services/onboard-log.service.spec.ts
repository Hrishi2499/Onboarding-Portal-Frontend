import { TestBed } from '@angular/core/testing';

import { OnboardLogService } from './onboard-log.service';

describe('OnboardLogService', () => {
  let service: OnboardLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
