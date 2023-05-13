import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent, map, throttle, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'app-test-throttle',
  templateUrl: './test-throttle.component.html',
  styleUrls: ['./test-throttle.component.css']
})
export class TestThrottleComponent implements AfterViewInit, OnDestroy{
  suscripcion:Subscription|undefined;
  nEventos:number=0;

  ngAfterViewInit(): void {
    const div = document.getElementById("divThrottle");
    const alarma$ = timer(20);
    const movimientosRaton$ = fromEvent(div!,'mousemove').pipe(
//                            throttleTime(30),
                            throttle(() => alarma$),
                            map(evt =>{
                              let x = (evt as MouseEvent).clientX;
                              let y = (evt as MouseEvent).clientY;
                              return { x, y };
                            })
                          );
    this.suscripcion = movimientosRaton$.subscribe(punto => {
                                console.log(punto);
                                this.nEventos++;
                        });
   }
  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }

}
