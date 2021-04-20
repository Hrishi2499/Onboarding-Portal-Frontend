import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  user: SocialUser;

  constructor(private authService: SocialAuthService,
              private router: Router,
              public authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() =>{
      this.authorizationService.checkLogin(this.user.authToken),
      this.router.navigate(['/home'])
    }
    );
  };
  onSubmit(f:any){
      //kept blank for now
  }
}

