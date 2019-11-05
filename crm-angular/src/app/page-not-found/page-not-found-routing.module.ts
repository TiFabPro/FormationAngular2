import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  { path: '', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PageNotFoundRoutingModule { }
