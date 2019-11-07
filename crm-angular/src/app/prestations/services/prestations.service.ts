import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import {  AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
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

     map((tab) => {
       return tab.map((obj) => {
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
 // update item in collection
 public update(item: Prestation, state: State) {
   console.log(item);
   item.state = state;
   console.log(item);
 }
 // add item in collection
 public add(item: Prestation) {
 }
 // delete item in collection
 // get item by id
}
