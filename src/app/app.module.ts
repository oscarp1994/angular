import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { BindingComponent } from './binding/binding.component';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  //composants appartenant au module (remplie automatiquement lorsque l'on cr�e un composant avec angular/cli)
  declarations: [
    AppComponent,
    PremierComponent,
    BindingComponent
 ,
    SqrtPipe ],
  //librairies angular n�cessaires � l'�x�cution du projet (� rajouter soit-m�me)
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //les services qui seront utilis�s
  providers: [],

  //composant lanc� au d�marrage du projet
  bootstrap: [AppComponent]
})
export class AppModule { }
