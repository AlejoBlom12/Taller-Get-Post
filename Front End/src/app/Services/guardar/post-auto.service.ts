import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostAutoService {


  constructor(public http: HttpClient) { }


  guardarAuto (auto: any): Observable <any>{
    return this.http.post("http://localhost:3500/guardandoAuto", auto)
      .pipe(
        catchError(e =>{
          console.log(e)
          return e
        })
      )
  }

  listadoAutos (): Observable<any>{
    return this.http.get("http://localhost:3500/listaAutos")
        .pipe(
          catchError(er =>{
            console.log(er)
          return er
          })
        )
  }
}
