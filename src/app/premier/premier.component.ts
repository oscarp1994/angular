import { Component, OnInit } from '@angular/core';
import {PremierService} from '../premier.service';


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

variableInjection;
//constructeur + injection
  constructor(private monService: PremierService) { }


  //m�thodes
  ngOnInit() {
    this.variable2 = 'ma deuxi�me variable';
    this.variableInjection = this.monService.getInfos();
  }

}
