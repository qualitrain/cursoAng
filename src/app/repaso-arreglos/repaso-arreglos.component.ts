import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-repaso-arreglos',
  templateUrl: './repaso-arreglos.component.html',
  styleUrls: ['./repaso-arreglos.component.css']
})
export class RepasoArreglosComponent implements AfterViewInit{
  miDiv:HTMLElement | undefined;
  miBtn:HTMLElement | undefined;
  nClicksDiv:number=0;
  nClicksBtn:number=0;
  ngAfterViewInit(): void {
    let div = document.getElementById("divPrincipal");
    if(div){
      this.miDiv = div;
      fromEvent(this.miDiv,'click').subscribe(
        evt => { 
          this.nClicksDiv++;
          console.log("Se hizo el click en el div " + this.nClicksDiv);
         }
      );
    }
    let btn = document.getElementById("btnMesesLg");
    if(btn){
      this.miBtn = btn
      fromEvent(this.miBtn,'click').subscribe(
        evt => { 
          evt.stopPropagation();
          this.nClicksBtn++;
          console.log("Se hizo el click en el botón " + this.nClicksBtn);
          }  
      )
    }
  }
  meses:string[] = ['enero','febrero','marzo','abril','mayo','junio','julio',
                    'agosto','septiembre','octubre','noviembre','diciembre'];
  resultado:string="";
  mostrarMesesLargos(){
    this.resultado = this.meses.filter(val => val.length >= 8)
                                .map(val => val.toUpperCase())
                                .map(val => '"'+ val + '"')
                                .join(", ");
  }
}
