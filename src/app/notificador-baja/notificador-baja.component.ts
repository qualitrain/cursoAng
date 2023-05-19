import { Component } from '@angular/core';
import { igato } from '../servicios/igato';
import { GestorDatosService } from '../servicios/gestor-datos.service';

@Component({
  selector: 'app-notificador-baja',
  templateUrl: './notificador-baja.component.html',
  styleUrls: ['./notificador-baja.component.css'],

})
export class NotificadorBajaComponent {
  nBajas=0;
  listaBajas:string[]=[];
  bajas:string="";
  mostrarBajas:boolean=false;

  constructor(private motorEventos:GestorDatosService){
    motorEventos.notificador
                .subscribe(bajaI => this.procesarBaja(bajaI) );
                
  }
  procesarBaja(bajaI:igato):void{
    this.nBajas++;
    this.listaBajas.push(bajaI.nombre); 
    this.bajas =  this.listaBajas.join(", ");
  }
}
