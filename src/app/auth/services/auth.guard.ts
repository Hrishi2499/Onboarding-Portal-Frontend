import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {AuthorizationService} from './authorization.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    return true; //Fow now, until backend is used to save token
  }

  check(){
    console.log(AuthorizationService.token);
    if(AuthorizationService.token == localStorage.getItem('token')){
      return true;
    }
    return this.router.parseUrl('/login');
  }
  
}
