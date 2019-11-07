import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationsService } from './services/prestations.service';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';



@NgModule({
  declarations: [PagePrestationsComponent, PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [PrestationsService]
})
export class PrestationsModule { }
