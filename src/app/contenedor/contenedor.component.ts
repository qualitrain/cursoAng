import { Component } from '@angular/core';
import { GestorDatosService } from '../servicios/gestor-datos.service';
import { GestorDatosMockService } from '../servicios/gestor-datos-mock.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
  providers:[
    {provide:GestorDatosService, useClass:GestorDatosMockService}
  ]
})
export class ContenedorComponent {
  notificacionesOn:boolean=true;
}
