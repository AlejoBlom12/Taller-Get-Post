import { Component } from '@angular/core';
import { PostAutoService } from "../Services/guardar/post-auto.service";


@Component({
  selector: 'app-formato-autos',
  templateUrl: './formato-autos.component.html',
  styleUrls: ['./formato-autos.component.scss']
})
export class FormatoAutosComponent {

  auto = {
    nombreAuto: "",
    modelo : "",
    empresa : "",
    precio : 0,
    descripcion : "",
  }
  constructor(public serviceAutos: PostAutoService){}

  guardarAuto(){
    this.serviceAutos.guardarAuto(this.auto).subscribe(date =>{
      if (date) {
        alert("El auto se a cargado con exito")
      }else{
        alert("No se a podido guarda el carro")
      }
    })
  }
}
