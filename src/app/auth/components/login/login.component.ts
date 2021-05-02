import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { HiringManager } from 'src/app/core/model/hiring-manager';
import { HiringManagerService } from 'src/app/core/services/hiring-manager.service';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  hmEmail: string;
  hmPassword: string;
  
  constructor(private authService: SocialAuthService,
              private router: Router, private hmService: HiringManagerService,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) =>{
      this.authorizationService.checkLogin();
    }, (err) =>{
      alert("Please login through accolite account and check password");
    }
    );
  }
  onSubmit(){

      this.hmService.getHiringManagerByEmail(this.hmEmail).subscribe((data) =>{
        if(data == null || data.password != this.hmPassword){
          alert("Please Check EmailId/Password");
        }
        else{
          this.authorizationService.normalLogin(data);
        }
      });

      }

  }

