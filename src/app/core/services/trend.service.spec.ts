import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TrendService } from './trend.service';

describe('TrendService', () => {
  let service: TrendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TrendService]
    });
    service = TestBed.inject(TrendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
