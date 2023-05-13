import { Component } from '@angular/core';
import { GestorDatosService } from '../servicios/gestor-datos.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
  providers:[
    GestorDatosService
  ]
})
export class ContenedorComponent {

}
