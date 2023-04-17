import { BuscaTesoroComponent } from './main/busca-tesoro/busca-tesoro.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoComponent } from './main/memo/memo.component';
import { MoletopoComponent } from './main/moletopo/moletopo.component';
import { QuienesquienComponent } from './main/quienesquien/quienesquien.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

{
  path: "main", component: MainComponent
},{
  path: "busca-tesoro",component: BuscaTesoroComponent
},{
  path: "memo",component: MemoComponent
},{
  path: "moletopo",component: MoletopoComponent
},{
  path: "quienesquien", component:QuienesquienComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
