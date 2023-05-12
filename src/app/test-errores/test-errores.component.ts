import { Component } from '@angular/core';
import { Observable, Subscription, catchError, filter, from, interval, map, of, retry, take, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-test-errores',
  templateUrl: './test-errores.component.html',
  styleUrls: ['./test-errores.component.css']
})
export class TestErroresComponent {
  suscripcion:Subscription|undefined;

  iniciarPruebaErrores(){
    this.suscripcion = interval(1000).pipe(
      tap(n => console.log("el numero hasta aquí es " + n)),
      map( n => getNum()),
 //     catchError( (err:any,fteObs:Observable<number>) => interval(500)),
 //     catchError( (err:any,fteObs:Observable<number>) => fteObs),
//      catchError( (err:any,fteObs:Observable<number>) => {console.log(err); throw(err)}),
//        catchError( (err:any,fteObs:Observable<number>) => of(500,1000,1500)),
        catchError( (err:any,fteObs:Observable<number>) => from([500,1000,1500])),
// retry(3),
      map(n => n*2),
      filter(n => n%2 === 0),
      take(15)
    ).subscribe({
      next:val => console.log("El valor fue:" + val),
      error:err => console.log("Oops "+  err),
      complete: () => console.log("Final feliz")
    })
  }

  desuscribir(){
    this.suscripcion?.unsubscribe();
  }

}
function getNum(){
  let numero = Math.trunc(Math.random() * 10000);
  if(numero % 7 === 0)
      throw "error! " + numero
  return numero;
}