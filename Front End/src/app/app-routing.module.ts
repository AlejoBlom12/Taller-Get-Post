import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';
import { FormatoAutosComponent } from './formato-autos/formato-autos.component';

const routes: Routes = [
  {path: "listaAutos", component: ListadoAutosComponent},
  {path: "guardandoAuto", component: FormatoAutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
