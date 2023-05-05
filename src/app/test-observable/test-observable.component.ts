import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  mensaje:string="";
  invocarFunAsincrona(){
  //  funcAsincrona();
    const obsFun:Observable<Number> = new Observable(funcAsincrona);
    obsFun.subscribe(valor => this.mensaje = "" + valor);    
  }
}

const funcAsincrona = function(emisor:any){
  setTimeout(()=> {
    console.log("Saludos!");
    emisor.next(Math.random())
  }, 2000);
}