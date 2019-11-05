import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, PreloadAllModules } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: 'login', component: PageLoginComponent },
  // permet de mettre en place le lazyloading
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(mod => mod.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
  },
  // Redirection dans une page contenant un param dans l'url
  // { path: 'hero/:id',      component: HeroDetailComponent }, // A reprendre vendredi
  // Redirection dans une page en lui passant des datas
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // Redirection de la route principale

  // Redirection page non trouvée
  // { path: '**', component: PageNotFoundComponent }
];

// On doit toujours mettre des routes et rien d'autres, pas de component
@NgModule({
// On retire les déclarations car 2 modules au même niveau, on ne peux avoir qu'un tableau de declaration au même niveau
// declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: PreloadAllModules } // <-- debugging purposes only
    )
  ]
})




export class AppRoutingModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
  // Use a custom replacer to display function names in the route configs
  const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

  console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
}



}
