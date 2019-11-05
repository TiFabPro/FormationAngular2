import { NgModule } from '@angular/core';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './pages/clients-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PageClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
