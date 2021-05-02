import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import {AuthorizationService} from './services/authorization.service'
import { AuthGuard } from './services/auth.guard'
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SocialLoginModule,
    RouterModule,
    HttpClientModule
  ],providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '720710474978-tb9oud47mc2163r3a96t60pvi2ar58qr.apps.googleusercontent.com',
              {hosted_domain: 'accolitedigital.com', approvalprompt: "force"}
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthorizationService,
        AuthGuard
      ]
    };
  }
}
