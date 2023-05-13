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
  }

  consultarGatos(){
    this.servicioDatos.getGatos().subscribe(
      arrGatos => this.gatos = [...arrGatos]
    )
  }
  eliminarGato(nombreI:string){
    this.servicioDatos.eliminarGato(nombreI);
    this.gatos = [];
    this.consultarGatos();
  }
}
