import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {
//attributs
variable1 = 'ma premi�re variable';
variable2:string = 'ma deuxi�me variable';
variable3 = 25;
//constructeur
  constructor() { }


  //m�thodes
  ngOnInit() {
    this.variable2 = 'ma deuxi�me variable';
  }

}
