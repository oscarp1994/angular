import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BindingService {

  //tableau de commentaires
  comments = [];
  constructor() { }

  //méthode ajout d'un commentaire au tableau de commentaires
  addComment(c){
    c.date = new Date();
    this.comments.push(c);
    
  }

  //récupération de tous les commentaires
    getAllComments(){
    return this.comments;
  }
}
