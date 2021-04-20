import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home', 
  canActivate: [AuthGuard],
    component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
