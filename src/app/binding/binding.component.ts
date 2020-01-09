import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  //attributs
  //stocker la liste des commentaires
  comments = [];
  //stocker un commentaire
  comment = {
date: null,
message: 'BONJOUR'

  };
  constructor() { }

  ngOnInit() {
  }

  addComment() {
    if (this.comment.message != '')
    {

      //date courante
      this.comment.date = new Date();
      //ajout du commentaire au tableau json
      this.comments.push({
        date: this.comment.date,
        message: this.comment.message
      });
      //vider le champs de saisie des messages
      this.comment.message = '';
    }
  }

}
