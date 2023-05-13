import { Component, AfterViewInit } from '@angular/core';
import { fromEvent, interval, map, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-ejer-take-ultil',
  templateUrl: './ejer-take-ultil.component.html',
  styleUrls: ['./ejer-take-ultil.component.css']
})
export class EjerTakeUltilComponent implements AfterViewInit{
  habilitado:boolean=true;
  nClicks:number=0;

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    let boton = document.getElementById("btn01");
    console.log(boton);
    fromEvent(boton as HTMLElement,'click').subscribe(
        evt => this.nClicks++)
    
    const alarma$ = timer(10000);

    let habilitar$ = interval(1000).pipe(
      map(n => n + 1),
      tap(n=> console.log(10 - n)),
      takeUntil(alarma$)
    )

    habilitar$.subscribe({
      complete:()=>{
        this.habilitado = !this.habilitado
      }
    })
    
  }
  
}
