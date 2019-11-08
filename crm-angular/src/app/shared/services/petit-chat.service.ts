// But du service: ajouter le numéto de verson
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetitChatService {
  public version = 1;
  constructor() { }

  public upgrade() {
    this.version = this.version + 1;
    console.log(this.version);
  }
}
