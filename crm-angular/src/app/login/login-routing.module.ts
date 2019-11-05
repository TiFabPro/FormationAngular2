import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LoginRoutingModule { }
