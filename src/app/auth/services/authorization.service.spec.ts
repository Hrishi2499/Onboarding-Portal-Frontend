import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [AuthorizationService, {provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    });
    service = TestBed.inject(AuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class SocialAuthServiceStub{
  
}