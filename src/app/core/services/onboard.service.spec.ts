import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OnboardService } from './onboard.service';

describe('OnboardService', () => {
  let service: OnboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OnboardService]
    });
    service = TestBed.inject(OnboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
