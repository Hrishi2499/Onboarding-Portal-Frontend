import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, 
              private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}