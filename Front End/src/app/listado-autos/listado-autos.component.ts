import { Component } from '@angular/core';
import { PostAutoService } from "../Services/guardar/post-auto.service";
import * as e from 'express';
import { FormatoAutosComponent } from "../formato-autos/formato-autos.component";


@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.scss']
})
export class ListadoAutosComponent {
  constructor(private listadoAutos :PostAutoService, si: FormatoAutosComponent){

  }
  public autoslista: any [] = []

  ngOnInit(){
    this.listadoAutos.listadoAutos().subscribe( lista => {
      this.autoslista = lista
    })
  }

}
