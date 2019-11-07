import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { Routes, RouterModule } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

const appRoutes: Routes = [
  { path: '',
  component: PagePrestationsComponent,
  data: { title: 'Prestations', label: 'Toutes les prestations' }
  },
  { path: 'add', component: PageAddPrestationComponent}
];

@NgModule({
  // Pas 2 declarations au même niveau
  //  declarations: [],
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class PrestationsRoutingModule { }
