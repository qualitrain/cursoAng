import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, debounce, debounceTime, fromEvent, map, timer } from 'rxjs';

@Component({
  selector: 'app-test-debounce',
  templateUrl: './test-debounce.component.html',
  styleUrls: ['./test-debounce.component.css']
})
export class TestDebounceComponent implements AfterViewInit, OnDestroy{
  nombre:string="";
  entradas$:Observable<any>|undefined;
  miSuscripcion:Subscription|undefined;

  ngAfterViewInit(): void {
    const alarma$ = timer(300);
    const inputNombre = document.getElementById("idNombre");
    this.entradas$  = fromEvent(inputNombre!,'input').pipe(
      map( (evt:Event ) => evt.target as HTMLElement),
      map( (miInput:HTMLElement) => (miInput as HTMLInputElement).value),
//      debounceTime(500)
      debounce(() => alarma$)
    );
    this.miSuscripcion =this.entradas$.subscribe( 
      text => {
        this.nombre = text;
        console.log("haciendo un GET /miServidor/nombres/" + text);
      });  
  }

  ngOnDestroy(): void {
      this.miSuscripcion?.unsubscribe();
  }

}
