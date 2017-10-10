import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CompnueveComponent  } from "./componentes/compnueve/compnueve.component"
import { CompunoComponent } from "./componentes/compuno/compuno.component"
import { CompdosComponent } from './componentes/compdos/compdos.component';
import { ComptresComponent } from './componentes/comptres/comptres.component';
import { CompsieteComponent } from './componentes/compsiete/compsiete.component';

const routes: any = [
  
  {
    path:'',
    component:CompdosComponent
  },
  {
    path:'compdos',
    component:CompdosComponent
  },
  {
    path:'compnueve',
    component: CompnueveComponent 
  },
  {
    path:'comptres',
    component:ComptresComponent
  },
  {
    path:'compsiete',
    component:CompsieteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
