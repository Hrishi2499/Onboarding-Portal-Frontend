import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';

import { CandidateDisplayComponent } from './components/candidate-display/candidate-display.component'
import { OnboardDisplayComponent } from './components/onboard-display/onboard-display.component'
import { OnboardComponent } from './components/onboard/onboard.component'
import { UpdateOnboardComponent } from './components/update-onboard/update-onboard.component';

const routes: Routes = [
  {path: 'candidates', canActivate: [AuthGuard], component: CandidateDisplayComponent},
  {path: 'onboardees',  canActivate: [AuthGuard], component: OnboardDisplayComponent},
  {path: 'create-onboard/:candidateId',  canActivate: [AuthGuard], component: OnboardComponent},
  {path: 'update-onboard/:onboardId',  canActivate: [AuthGuard], component: UpdateOnboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
