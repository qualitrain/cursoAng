import { EventEmitter, Injectable } from '@angular/core';
import { igato } from './igato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorDatosMockService {
  static nInstancias:number=0
  nInstancia:number=0;
  notificador:EventEmitter<igato> = new EventEmitter();

  gatos=[
    {nombre:'Nube',edad:5},
    {nombre:'Pillin',edad:3},
    {nombre:'Morita',edad:2},
    {nombre:'Estela',edad:10},
    {nombre:'Moka',edad:8},
  ]
  constructor() { 
    GestorDatosMockService.nInstancias++;
    this.nInstancia = GestorDatosMockService.nInstancias;
  }

  getGatoXID(id:number):Observable<igato>{
    return of(this.gatos[id -1]);
  }
   
  getGatos():Observable<igato[]>{
    let misGatos = [...this.gatos];
    return of(misGatos);
  }

  eliminarGato(nombre:string){
    let i = this.gatos.findIndex( (valor => valor.nombre === nombre));
    let gatoMuerto = this.gatos[i];
    this.gatos.splice(i,1);
    this.notificador.emit(gatoMuerto);
    console.log("GestorDatosService.eliminarGato(" + nombre + ")")
    console.log(this.gatos);
  }

}
