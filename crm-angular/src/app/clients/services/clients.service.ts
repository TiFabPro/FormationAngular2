import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Client[];

  constructor() {
    // Permet de faire le set sans lui dire
    this.collection = fakeClients;
  }



    // get Collection
    public get collection() {
      return this.pCollection;
    }

    // set Collection
    public set collection(col: Client[]) {
      this.pCollection = col;
    }

    // update item in Collection
    public update(item: Client, state: StateClient) {
      console.log(item);
      console.log('change de state');
      item.state = state;
      console.log(item);
    }


}
