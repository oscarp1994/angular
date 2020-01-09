import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {
  //attribut json
  infos= {
    nom: 'dupond',
    prenom: 'serge',
    telephone : '0123456789'
  }

  constructor() { }

  //m�thodes qui va retourner l'objet json
  getInfos(){
    return this.infos;
  }

}
