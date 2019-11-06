import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Prestation[];
  constructor() {
    // Permet de faire le set sans lui dire
    this.collection = fakePrestations;

    // Permet de faire le get sans lui dire
    // this.test = this.collection;
  }

  // get Collection
  public get collection() {
    return this.pCollection;
  }

    // set Collection
    public set collection(col: Prestation[]) {
      this.pCollection = col;
    }


    // update item in Collection
    public update(item: Prestation, state: State) {
      console.log(item);
      console.log('change de state');
      item.state = state;
      console.log(item);
    }
    // add item in Collection

    // delete item in Collection

    // get item by id

}

