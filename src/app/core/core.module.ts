import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { CandidateDisplayComponent } from './components/candidate-display/candidate-display.component';
import { OnboardDisplayComponent } from './components/onboard-display/onboard-display.component';
import { OnboardComponent } from './components/onboard/onboard.component';

@NgModule({
  declarations: [
      CandidateDisplayComponent,
       OnboardDisplayComponent,
       OnboardComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    CandidateDisplayComponent,
    OnboardDisplayComponent,
    OnboardComponent]
})

export class CoreModule { }
