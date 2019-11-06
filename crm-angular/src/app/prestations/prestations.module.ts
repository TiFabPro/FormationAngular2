import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationsService } from './services/prestations.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ],
  providers: [PrestationsService]
})
export class PrestationsModule { }
