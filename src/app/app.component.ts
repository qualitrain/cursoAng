import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ejemploObservable:boolean=false;
  ejemploFromEvent:boolean=false;
  ejercicioFromEvent:boolean=false;
  componenteParametrizado=false;
  ejemploManejoDeErrores=false;
  ejercicioTakeUntil=false;
  ejercicioMerge=false;
  ejercicioConcat=true;

  title = 'cursoAng';
}
