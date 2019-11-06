import { NgModule } from '@angular/core';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { CommonModule } from '@angular/common';
import { ClientsService } from './services/clients.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
