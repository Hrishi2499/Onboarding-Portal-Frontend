import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component'
import { AuthGuard } from './auth/services/auth.guard';
import { CandidateDisplayComponent } from './core/components/candidate-display/candidate-display.component';
import { LogDisplayComponent } from './core/components/log-display/log-display.component';
import { OnboardDisplayComponent } from './core/components/onboard-display/onboard-display.component';
import { OnboardComponent } from './core/components/onboard/onboard.component';
import { TrendsComponent } from './core/components/trends/trends.component';
import { UpdateOnboardComponent } from './core/components/update-onboard/update-onboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '' , redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  {path: 'candidates', canActivate: [AuthGuard], component: CandidateDisplayComponent, pathMatch: 'full'},
  {path: 'onboardees',  canActivate: [AuthGuard], component: OnboardDisplayComponent},
  {path: 'create-onboard/:candidateId',  canActivate: [AuthGuard], component: OnboardComponent},
  {path: 'update-onboard/:onboardId',  canActivate: [AuthGuard], component: UpdateOnboardComponent},
  {path: 'trends',  canActivate: [AuthGuard], component: TrendsComponent},
  {path: 'logs',  canActivate: [AuthGuard], component: LogDisplayComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
