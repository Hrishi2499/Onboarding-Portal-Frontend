import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { CandidateDisplayComponent } from './components/candidate-display/candidate-display.component';
import { OnboardDisplayComponent } from './components/onboard-display/onboard-display.component';
import { OnboardComponent } from './components/onboard/onboard.component';
import { UpdateOnboardComponent } from './components/update-onboard/update-onboard.component';

@NgModule({
  declarations: [
      CandidateDisplayComponent,
       OnboardDisplayComponent,
       OnboardComponent,
       UpdateOnboardComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CandidateDisplayComponent,
    OnboardDisplayComponent,
    OnboardComponent]
})

export class CoreModule { }
