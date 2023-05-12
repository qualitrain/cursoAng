import { Component, Input, OnInit } from '@angular/core';
import { Observable, interval, map, take,tap } from 'rxjs';

@Component({
  selector: 'app-test-interval',
  templateUrl: './test-interval.component.html',
  styleUrls: ['./test-interval.component.css']
})
export class TestIntervalComponent implements OnInit{
  @Input()
  pausaStr:string | undefined;
  
  pausa:number=1500;
  tonos:string[] =      ["light", "primary", "secondary", "success", "danger", "warning", "info", "dark"];
  tonosTexto:string[] = ["dark",  "light",   "light",     "light",   "light",  "dark", "light", "light"];
  tonoActual:string="";
  obsInterval10$:Observable<any> | undefined;

  constructor(){}

  ngOnInit(): void {
    if(this.pausaStr){
      this.pausa = Number.parseInt(this.pausaStr);
    }
    /* // Considera solamente el color de fondo
    this.obsInterval10$ = interval(this.pausa).pipe(
      map( num => num % this.tonos.length),
      tap( num => console.log("indice=" + num)),
      map( idx => this.tonos[idx] ),
      map( tono => "bg-" + tono ),
      tap( clase => console.log(clase)),
      take(30)
    )
    */
    // Considera tanto color de fondo cómo color de texto
    this.obsInterval10$ = interval(this.pausa).pipe(
      map( num => num % this.tonos.length),
      tap( num => console.log("indice=" + num)),
      map( idx => "bg-" + this.tonos[idx] + " text-" + this.tonosTexto[idx]),
      tap( clase => console.log(clase)),
      take(30)
    )
  }



  iniciarConteo(){
      this.obsInterval10$!
        .subscribe(claseI => this.tonoActual = claseI);
  }

}
