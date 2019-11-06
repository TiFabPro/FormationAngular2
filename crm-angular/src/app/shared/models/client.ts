import { ClientI } from '../interface/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {

  id: string;
  name: string;
  email: string;
  state = StateClient.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }


}
