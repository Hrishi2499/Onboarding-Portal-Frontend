import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component'
import { AuthGuard } from './auth/services/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent , pathMatch: 'full'},
  { path: '' , redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', 
    canActivate: [AuthGuard],
    component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
