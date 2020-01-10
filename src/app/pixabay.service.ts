import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  constructor(private httpClient: HttpClient) { }

  onSearch(param: String): Observable<any> {
return new Observable (
  observer => {
    this.httpClient.get("https://pixabay.com/api/?key=14868806-4f00f889225587f47784e2216&q" + param)
    .subscribe(data => {
      if (!data){
        observer.error("Aucune image trouvé");
      }
      else {
        observer.next(data);
        observer.complete();
      }

    }
  
);
  }
)}}

