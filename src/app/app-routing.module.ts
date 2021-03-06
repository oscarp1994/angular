import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierComponent } from './premier/premier.component';
import { BindingComponent } from './binding/binding.component';

//d�finir les routes de mon projet
const routes: Routes = [
  //d�finition des routes
{path: 'premier', component: PremierComponent},
{path: 'binding', component: BindingComponent},
//d�claration de la route par d�faut
{
  path: '',
  redirectTo: '/binding',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
