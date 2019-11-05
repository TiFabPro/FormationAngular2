import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import {CoderbaseUiModule} from '@coderbase/ui';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  // Permet d'exporter le composant à l'exterieur
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule,
    RouterModule
  ]
})
export class UiModule { }
