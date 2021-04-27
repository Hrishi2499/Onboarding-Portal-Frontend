import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { PageNotFoundComponent } from '../page-not-found.component';

import { CandidateDisplayComponent } from './components/candidate-display/candidate-display.component'
import { LogDisplayComponent } from './components/log-display/log-display.component';
import { OnboardDisplayComponent } from './components/onboard-display/onboard-display.component'
import { OnboardComponent } from './components/onboard/onboard.component'
import { TrendsComponent } from './components/trends/trends.component';
import { UpdateOnboardComponent } from './components/update-onboard/update-onboard.component'

const routes: Routes = [
  {path: 'candidates', canActivate: [AuthGuard], component: CandidateDisplayComponent, pathMatch: 'full'},
  {path: 'onboardees',  canActivate: [AuthGuard], component: OnboardDisplayComponent},
  {path: 'create-onboard/:candidateId',  canActivate: [AuthGuard], component: OnboardComponent},
  {path: 'update-onboard/:onboardId',  canActivate: [AuthGuard], component: UpdateOnboardComponent},
  {path: 'trends',  canActivate: [AuthGuard], component: TrendsComponent},
  {path: 'logs',  canActivate: [AuthGuard], component: LogDisplayComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
