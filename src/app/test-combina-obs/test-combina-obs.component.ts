import { Component, AfterViewInit } from '@angular/core';
import { interval, map, tap, take, concatMap, concat, mergeMap, switchMap, exhaustMap, fromEvent, of, merge } from 'rxjs';

@Component({
  selector: 'app-test-combina-obs',
  templateUrl: './test-combina-obs.component.html',
  styleUrls: ['./test-combina-obs.component.css']
})
export class TestCombinaObsComponent implements AfterViewInit{
  readonly meses:string[] = ['enero','febrero','marzo','abril','mayo','junio','julio',
  'agosto','septiembre','octubre','noviembre','diciembre'];
  readonly personas:string[] = [ 'Alberto','Bertha','Carlos','Daniela',"Efrén","Fernando",
                                          "Gonzalo","Homero","Isabel" ];
  mesesCada1000milis$: any;
  personasCada330$: any;

  constructor(){
    this.mesesCada1000milis$ = interval(1000).pipe(
      map(n => this.meses[n % this.meses.length]),
      take(this.meses.length)); 

    this.personasCada330$ = interval(330).pipe(
      map ( n => this.personas[n % this.personas.length]),
      take(this.personas.length));
  }

  ngAfterViewInit(): void {
    const botonConcatMap:HTMLElement = document.getElementById('btnConcatMap')!;
    const botonMergeMap:HTMLElement = document.getElementById('btnMergeMap')!;
    const botonSwitchMap:HTMLElement = document.getElementById('btnSwitchMap')!;
    const botonExhaustMap:HTMLElement = document.getElementById('btnExhaustMap')!;

    const clicksConcat$ = fromEvent(botonConcatMap,'click').pipe(
      map(() => 'concat')
    );
    const clicksMerge$ = fromEvent(botonMergeMap,'click').pipe(
      map(() => 'merge')
    );
    const clicksSwitch$ = fromEvent(botonSwitchMap,'click').pipe(
      map(() => 'switch')
    );
    const clicksExhaust$ = fromEvent(botonExhaustMap,'click').pipe(
      map(() => 'exhaust')
    );

    const cartesianoConcatMap$ = this.mesesCada1000milis$.pipe(
      concatMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );
    const cartesianoMergeMap$ = this.mesesCada1000milis$.pipe(
      mergeMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );
    const cartesianoSwitchMap$ = this.mesesCada1000milis$.pipe(
      switchMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );
    const cartesianoExhaustMap$ = this.mesesCada1000milis$.pipe(
      exhaustMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );

    const click$ = merge(clicksConcat$, clicksMerge$, clicksSwitch$, clicksExhaust$).pipe(
      switchMap( cad => {
        switch (cad){
          case 'concat': return cartesianoConcatMap$;
          case 'merge':  return cartesianoMergeMap$;
          case 'switch': return cartesianoSwitchMap$;
          case 'exhaust': return cartesianoExhaustMap$;
        }
      })
    );

    click$.subscribe(val => console.log(val)); 
  }

}
