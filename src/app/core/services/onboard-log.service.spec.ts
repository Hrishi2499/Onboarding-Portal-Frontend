import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OnboardLogService } from './onboard-log.service';

describe('OnboardLogService', () => {
  let service: OnboardLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent}
      ])],
      providers: [OnboardLogService]
    });
    service = TestBed.inject(OnboardLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

@Component({template:''})
export class DummyComponent {}