import { Component, OnInit } from '@angular/core';
import { BindingService } from '../binding.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  //attributs
  //recupération de la liste des commentaires
  comments = this.bindingService.getAllComments();
  //stocker un commentaire
  comment = {
date: null,
message: ''

  };
  constructor(private bindingService : BindingService) { }

  ngOnInit() {
    
  }

  addComment() {
    if (this.comment.message != '')
    {

      this.bindingService.addComment(
      {message:this.comment.message}
      );
      this.comments = this.bindingService.getAllComments();
      this.comment.message = '';
     /* //date courante
      this.comment.date = new Date();
      //ajout du commentaire au tableau json
      this.comments.push({
        date: this.comment.date,
        message: this.comment.message
      });
      //vider le champs de saisie des messages
      this.comment.message = '';*/
    }
  }

}
