import { Component, AfterViewInit } from '@angular/core';
import { IPerro } from '../servicios/iperro';
import { GestorDatosPerreraService } from '../servicios/gestor-datos-perrera.service';
import { fromEvent, switchMap,map, tap, filter, catchError, retry, from, of } from 'rxjs';

@Component({
  selector: 'app-test-ajax01',
  templateUrl: './test-ajax01.component.html',
  styleUrls: ['./test-ajax01.component.css']
})
export class TestAjax01Component implements AfterViewInit{
  perris:IPerro ={
    id:0,
    nombre:'',
    raza:'',
    edad:0,
    idPropietario:0
  }
  inputIdPerro!: HTMLInputElement;
  perroInexistente:boolean = false;
  errorEnPeticion:boolean = false;
  mensajeError:string="";

 constructor(private gestorDatos:GestorDatosPerreraService){}

  ngAfterViewInit(): void {
    this.inputIdPerro = document.getElementById("inpIdPerro") as HTMLInputElement;
    const btnBuscar =   document.getElementById("btnBuscar");
    const click$ = fromEvent(btnBuscar!,'click');

    const clickYget$ = fromEvent(btnBuscar!,'click').pipe(
        tap (() => console.log("nuevo click")),
        map(evt => {
          let idPerro = Number.parseInt(this.inputIdPerro.value);
          return idPerro; 
        }),   
        switchMap( idPerro => this.gestorDatos.getPerroXID(idPerro)),
        tap(objResultado => {
          if(objResultado?.estado === 'error')
              this.reportarError(objResultado.objError)
        }),
        filter(objResultado => objResultado?.estado === undefined),
        tap(perro => (!perro) ? this.reportarPerroInexistente() : ''),
        filter(perro => !!(perro))
    );

    clickYget$.subscribe( {
      next:perro => this.perris = perro,
      error:err => {
        console.log("Esta suscripcion ha muerto por ");
        console.log(err);
      },
      complete: () => console.log("Suscripcion terminada")
    });

    click$.subscribe( evt => {
      this.errorEnPeticion = false;
      this.perroInexistente = false;
    })
  }
  reportarError(error: any) {
    console.log("reportarError");
    console.log(error);
    if(error.status === 0){
      this.reportarErrorConexion();
    }
    else{
      this.reportarErrorDevuelto(error.response);
    }
  }
  reportarErrorDevuelto(error: any) {
    console.log(error);
    this.mensajeError = error.mensaje;
    this.errorEnPeticion = true;
  }

  reportarErrorConexion() {
    this.mensajeError = "Error de conexion: Servidor aparentemente muerto";
    this.errorEnPeticion = true;
  }

  reportarPerroInexistente(): void {
    this.perroInexistente = true;

    this.perris.id = Number.parseInt(this.inputIdPerro.value);
    this.perris.idPropietario = -1;
    this.perris.edad=-1
    this.perris.nombre= "No existe";
    this.perris.raza= "No existe";
  }

}
