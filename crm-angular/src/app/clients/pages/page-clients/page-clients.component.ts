import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss'],
  providers: [ClientsService]
})
export class PageClientsComponent implements OnInit {

  public collection: Client[];
  public headers: string[];
  public states = StateClient;
  public title: string;
  public label: string;

  constructor(
    private clientService: ClientsService
  ) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.headers = [ 'id',  'client',  'email',  'state'];

    this.title = 'Clients';
    this.label = 'Tous les clients';
  }

  public update(item: any, event: any) {
    // console.log(event.target.value);
    this.clientService.update(item, event.target.value);

  }


}
