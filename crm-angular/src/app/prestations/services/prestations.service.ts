import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    // Permet de transformer le tableau d'objet json en tableau d'objet de prestation
    this.collection = this.itemsCollection.valueChanges().pipe(
      map(tab => {
        return tab.map(obj => {
          return new Prestation(obj);
        });
      })

      // equivalent
      // map( tab => tab.map( obj => new Prestation(obj) ) )
    );
  }
  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId(); // Permet de créer un id de document
    const prestation = { id, ...item }; // Création d'un nouvel objet
    return this.itemsCollection.doc(id).set(prestation).catch(e => {
        console.log(e);
      }); // Objet de type AngulareFireStormCOllection
    // return this.http.post('urlapi/prestations', item);
  }
  update(item: Prestation, state?: State): Promise<any> {
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }
  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch(e => {
        console.log(e);
      });
    // return this.http.delete(urlapi/prestations/${item.id});
  }
  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(urlaspi/prestations/${id});
  }

  //  // update item in collection
  //  public update(item: Prestation, state: State) {
  //    console.log(item);
  //    item.state = state;
  //    console.log(item);
  //  }
  //  // add item in collection
  //  public add(item: Prestation) {
  //  }
  //  // delete item in collection
  //  // get item by id
}
