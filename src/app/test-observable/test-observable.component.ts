import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  mensaje:string[]=[];
  suscripcion:Subscription[]=[];

  invocarFunAsincrona(){
  //  funcAsincrona();
    const obsFun:Observable<Number> = new Observable(funcAsincrona);
    let i = this.suscripcion.length;
    this.suscripcion.push( obsFun.subscribe(valor => this.mensaje[i] = "" + valor));    
  }
  detenerFunAsincrona(){
    this.suscripcion.pop()?.unsubscribe();
    this.mensaje[this.suscripcion.length]="Finalizado";
  }
}

const funcAsincrona = function(emisor:any){
  let i = 0;
  const limite = 10;
  const lapso = 1000;
  let clock = 
  setInterval(()=> {
    i++;
    console.log("Saludos!" + i);
    emisor.next(Math.random())
    if(i===limite){
      clearInterval(clock);
      emisor.complete(0);
    }
  }, lapso);
}