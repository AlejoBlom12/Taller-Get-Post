import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostAutoService {

  baseUrl1 = "http://localhost:3500/guardandoAuto"
  baseUrl2 = "http://localhost:3500/listaAutos"

  constructor(public http: HttpClient) { }


  guardarAuto (auto: any): Observable <any>{
    return this.http.post(this.baseUrl1, auto)
      .pipe(
        catchError(e =>{
          return throwError("Se ha producido un error" + e)
        })
      )
  }

  listadoAutos (): Observable<any>{
    return this.http.get(this.baseUrl2)
        .pipe(
          catchError(er =>{
            return  throwError("Se ha producido un error" + er)
          })
        )
  }
}
