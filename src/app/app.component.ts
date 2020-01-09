import { Component } from '@angular/core';

@Component({
  //servira pour afficher la page
  selector: 'app-root',
  //page html qui sera affich�e (vue)
  templateUrl: './app.component.html',
  //feuille de style associ�e � la page html
  styleUrls: ['./app.component.css']
})
//classe angular jouant le role de controleur
export class AppComponent {

  //propri�t�
  title = 'mon-premier-projet';
  //m�thodes
}
