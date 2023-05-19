import { Component } from '@angular/core';
import { igato } from '../servicios/igato';
import { GestorDatosService } from '../servicios/gestor-datos.service';

@Component({
  selector: 'app-consultador-gatos',
  templateUrl: './consultador-gatos.component.html',
  styleUrls: ['./consultador-gatos.component.css'],
  providers:[
//    GestorDatosService
  ]
})
export class ConsultadorGatosComponent {
  gatos:igato[]=[];
  nInstanciaServicio:number=0;

  constructor(private servicioDatos:GestorDatosService){
    this.nInstanciaServicio = servicioDatos.nInstancia;
    this.servicioDatos.notificador.subscribe(gato => this.procesarGatoMuerto(gato))
  }

  consultarGatos(){
    this.servicioDatos.getGatos().subscribe(
      arrGatos => this.gatos = [...arrGatos]
    )
  }
  procesarGatoMuerto(gato:igato){
    this.consultarGatos();
  }
  eliminarGato(nombreI:string){
    this.servicioDatos.eliminarGato(nombreI);
    this.gatos = [];
    this.consultarGatos();
  }
}
