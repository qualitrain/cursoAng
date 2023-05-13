import { Component, AfterViewChecked, AfterViewInit } from '@angular/core';
import { fromEvent, merge, tap } from 'rxjs';

@Component({
  selector: 'app-ejer-merge',
  templateUrl: './ejer-merge.component.html',
  styleUrls: ['./ejer-merge.component.css']
})
export class EjerMergeComponent implements AfterViewInit{
  nClicks:number=0;

  ngAfterViewInit(): void {
    const boton1 = document.getElementById("btn001");
    const boton2 = document.getElementById("btn002");
    const boton3 = document.getElementById("btn003");

   const clicksBtn1$ = fromEvent(boton1!,'click');
   const clicksBtn2$ = fromEvent(boton2!,'click');
   const clicksBtn3$ = fromEvent(boton3!,'click');

   const clicks$ = merge(
                         clicksBtn1$, 
                         clicksBtn2$, 
                         clicksBtn3$ 
                         );
   clicks$.subscribe( evt => this.nClicks++)
  }
}
