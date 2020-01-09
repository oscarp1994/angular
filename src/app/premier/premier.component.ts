import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {
//attributs
variable1 = 'ma première variable';
variable2:string = 'ma deuxième variable';
variable3 = 25;
//constructeur
  constructor() { }


  //méthodes
  ngOnInit() {
    this.variable2 = 'ma deuxième variable';
  }

}
