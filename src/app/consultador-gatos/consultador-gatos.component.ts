import { Component } from '@angular/core';
import { igato } from '../servicios/igato';
import { GestorDatosService } from '../servicios/gestor-datos.service';

@Component({
  selector: 'app-consultador-gatos',
  templateUrl: './consultador-gatos.component.html',
  styleUrls: ['./consultador-gatos.component.css']
})
export class ConsultadorGatosComponent {
  gatos:igato[]=[];

  constructor(private servicioDatos:GestorDatosService){}

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
