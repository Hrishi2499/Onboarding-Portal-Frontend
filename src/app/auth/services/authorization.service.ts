import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  static token: any;

  constructor(private router: Router, 
              private authService: SocialAuthService) {}
  
  checkLogin(token:any){
    localStorage.setItem('token',token);
    AuthorizationService.token = token;
  }

  logout(): void {
      localStorage.removeItem('token');
  }
}


