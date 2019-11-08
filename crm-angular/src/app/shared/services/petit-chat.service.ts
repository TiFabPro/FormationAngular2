// But du service: ajouter le numéto de verson
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetitChatService {
  public version$ = new BehaviorSubject(1); // Création observable froid
  constructor() { }

  public upgrade() {
    this.version$.next(this.version$.value + 1);
    console.log(this.version$.value);
  }
}
