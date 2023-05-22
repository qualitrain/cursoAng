import { Component, AfterViewInit } from '@angular/core';
import { IPerro } from '../servicios/iperro';
import { GestorDatosPerreraService } from '../servicios/gestor-datos-perrera.service';
import { fromEvent, switchMap,map, tap, filter, catchError, retry } from 'rxjs';

@Component({
  selector: 'app-test-ajax01',
  templateUrl: './test-ajax01.component.html',
  styleUrls: ['./test-ajax01.component.css']
})
export class TestAjax01Component implements AfterViewInit{
  perris:IPerro ={
    id:900,
    nombre:'Cirilo',
    raza:'Boxer',
    edad:5,
    idPropietario:9
  }
  inputIdPerro!: HTMLInputElement;
  hayError:boolean = false;
  errorEnPeticion:boolean = false;
  mensajeError:string="";

 constructor(private gestorDatos:GestorDatosPerreraService){}

  ngAfterViewInit(): void {
    this.inputIdPerro = document.getElementById("inpIdPerro") as HTMLInputElement;
    const btnBuscar = document.getElementById("btnBuscar");
    const click$ = fromEvent(btnBuscar!,'click');
    const clickYget$ = fromEvent(btnBuscar!,'click').pipe(

        // tap(evt => {
        //   this.hayError = false;
        //   this.errorEnPeticion = false;
        // }),
        map(evt => {
          let idPerro = Number.parseInt(this.inputIdPerro.value);
          return idPerro; 
        }),   
        switchMap( idPerro => this.gestorDatos.getPerroXIDerroneo(idPerro)),
        catchError( (error:any) => {
          if(error.status === 0){
            this.reportarErrorConexion();
          }
          throw error;
        }),
        tap(perro => (!perro) ? this.reportarPerroInexistente() : ''),
        filter(perro => !!perro)
    );

    clickYget$.subscribe( {
      next:perro => this.perris = perro,
      error:err => {
        console.log("Esta suscripcion ha muerto por ");
        console.log(err.mensaje);
      }
    }
    );
    click$.subscribe( evt => {
      this.errorEnPeticion = false;
      this.hayError = false;
    })
  }
  reportarErrorConexion() {
    this.mensajeError = "Error de conexion: Servidor aparentemente muerto";
    this.errorEnPeticion = true;
  }
  reportarPerroInexistente(): void {
    this.hayError = true;

    this.perris.id = Number.parseInt(this.inputIdPerro.value);
    this.perris.idPropietario = -1;
    this.perris.edad=-1
    this.perris.nombre= "No existe";
    this.perris.raza= "No existe";
  }

}
