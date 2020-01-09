import { Component } from '@angular/core';

@Component({
  //servira pour afficher la page
  selector: 'app-root',
  //page html qui sera affichée (vue)
  templateUrl: './app.component.html',
  //feuille de style associée à la page html
  styleUrls: ['./app.component.css']
})
//classe angular jouant le role de controleur
export class AppComponent {

  //propriété
  title = 'mon-premier-projet';
  //méthodes
}
