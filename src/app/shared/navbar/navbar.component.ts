import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AuthorizationService } from 'src/app/auth/services/authorization.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, 
              private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.logout();
  }
}
