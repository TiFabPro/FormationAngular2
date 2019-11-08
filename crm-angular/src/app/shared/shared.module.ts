import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directive/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../template/templates.module';
import { BouttonComponent } from './components/boutton/boutton.component';
import { RouterModule } from '@angular/router';
import { PoubelleComponent } from './components/poubelle/poubelle.component';
import { EditComponent } from './components/edit/edit.component';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent,
    BouttonComponent, PoubelleComponent, EditComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, TemplatesModule,
    BouttonComponent, PoubelleComponent, EditComponent]
})
export class SharedModule { }
