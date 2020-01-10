import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../pixabay.service';

@Component({
  selector: 'app-pixabay',
  templateUrl: './pixabay.component.html',
  styleUrls: ['./pixabay.component.css']
})
export class PixabayComponent implements OnInit {

  //recherche saisie par utilisateur
  motCle= '';
  //surveiller le temps e chargement
  loading = true;
  //recuperer les erreurs
  error='';
  //recuperation du resultat
  images: Array<Object> = new Array<Object>();

  constructor(private pixabayService:PixabayService) { }

  ngOnInit() {
  }

}
