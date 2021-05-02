import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HiringManagerService } from './hiring-manager.service';

describe('HiringManagerService', () => {
  let service: HiringManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HiringManagerService]
    });
    service = TestBed.inject(HiringManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
