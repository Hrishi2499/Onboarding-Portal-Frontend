import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { HiringManager } from 'src/app/core/model/hiring-manager';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  user: SocialUser;
  loggedIn: boolean = false;
  private idToken: String;

  constructor(private router: Router, 
              private authService: SocialAuthService) {}

  getIdToken() {
      return this.idToken;
  }
  
  checkLogin(){
    this.authService.authState.subscribe((user) =>{
      this.user = user;
      this.loggedIn = (user != null);
      
      if(this.loggedIn){
        this.idToken = user.idToken;
        this.router.navigate(['/home']);
      }
    })
    
  }
  normalLogin(hm: HiringManager){
    let manager = new SocialUser();
    manager.name = hm.name;
    manager.email = hm.hmEmail;
    this.loggedIn = true;
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.idToken = "";
    this.loggedIn = false;
    this.user = new SocialUser();
    this.authService.signOut();
    this.router.navigate(['/login']);      
  }
}


