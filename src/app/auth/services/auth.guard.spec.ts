import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';

import { AuthGuard } from './auth.guard';
import { AuthorizationService } from './authorization.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

class SocialAuthServiceStub{
  
}