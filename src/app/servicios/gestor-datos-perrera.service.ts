import { Injectable } from '@angular/core';
import { IPerro } from './iperro';
import { catchError, Observable, retry } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";

@Injectable({
  providedIn: 'root'
})
export class GestorDatosPerreraService {
  readonly uriPerroxID = 'http://localhost:8080/ServidorParaAjax/Perrera/Perro/';
  constructor() { }

  getPerroXID(id:number):Observable<any>{
    return ajax.getJSON(this.uriPerroxID + id).pipe(
      catchError( (error:any) => {
          console.error(error);
          throw error;
        })
    )
  }
  getPerroXIDerroneo(id:number):Observable<any>{
    console.log("getPerroXIDerroneo()")
    return ajax.getJSON(this.uriPerroxID + id + "A").pipe(
      retry(3),
      catchError( (error:any) => {
        if(error.status != 0){
          console.error(error);
          throw error.response;
        }
        else
          throw error
        })
    )
  }

}
