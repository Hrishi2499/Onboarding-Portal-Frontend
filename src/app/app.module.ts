import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    AuthModule.forRoot(),
    SocialLoginModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
