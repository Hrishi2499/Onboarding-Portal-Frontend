import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';

import { CandidateDisplayComponent } from './components/candidate-display/candidate-display.component'
import { OnboardDisplayComponent } from './components/onboard-display/onboard-display.component'
import { OnboardComponent } from './components/onboard/onboard.component'

const routes: Routes = [
  {path: 'candidates', canActivate: [AuthGuard], component: CandidateDisplayComponent},
  {path: 'onboardees',  canActivate: [AuthGuard], component: OnboardDisplayComponent},
  {path: 'create-onboard',  canActivate: [AuthGuard], component: OnboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
