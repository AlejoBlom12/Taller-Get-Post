import { Component } from '@angular/core';
import { PostAutoService } from "../Services/guardar/post-auto.service";
import * as e from 'express';



@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.scss']
})
export class ListadoAutosComponent {
  constructor(private listadoAutos :PostAutoService){

  }
  public autoslista: any [] = []

  ngOnInit(){
    this.listadoAutos.listadoAutos().subscribe( lista => {
      this.autoslista = lista
    })
  }

}
