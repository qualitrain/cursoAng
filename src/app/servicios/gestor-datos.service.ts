import { EventEmitter, Injectable } from '@angular/core';
import { igato } from './igato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorDatosService {
  static nInstancias:number=0
  nInstancia:number=0;
  notificador:EventEmitter<igato> = new EventEmitter();

  gatos=[
    {nombre:'Fifi',edad:5},
    {nombre:'Esponja',edad:3},
    {nombre:'Trapito',edad:2},
    {nombre:'Tiger',edad:10},
    {nombre:'Tomas',edad:8},
  ]
  constructor() { 
    GestorDatosService.nInstancias++;
    this.nInstancia = GestorDatosService.nInstancias;
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
