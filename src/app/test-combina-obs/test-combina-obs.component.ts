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

    const cartesianoConcat$ = this.mesesCada1000milis$.pipe(
      concatMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );
    const cartesianoMergeMap$ = this.mesesCada1000milis$.pipe(
      mergeMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );

    const clicksBtnConcatMap$ = fromEvent(botonConcatMap,'click').pipe(
                                  switchMap(evt => cartesianoConcat$)
                                );

    const clicksBtnMergeMap$ = fromEvent(botonMergeMap,'click').pipe(
                                  switchMap(evt => cartesianoMergeMap$)
                                );

    clicksBtnConcatMap$.subscribe((val:any) => console.log('\t' + val));                            
    clicksBtnMergeMap$.subscribe((val:any) => console.log('\t' + val)); 
 
  }

  probarCombinacionConcatMap(){
  
    const cartesiano$ = this.mesesCada1000milis$.pipe(
      concatMap(mes => this.personasCada330$.pipe(
        map(per => mes + ' - ' + per)
      ))
    );

    const cartesiano2$ = this.personasCada330$.pipe(
      concatMap(per => this.mesesCada1000milis$.pipe(
        map(mes => per + ' - ' + mes)
      ))
    )

    const cartesianos$ = concat(cartesiano$,cartesiano2$);
    cartesianos$.subscribe((val:any) => console.log('\t' + val));
  }

  probarCombinacionMergeMap(){
    this.mesesCada1000milis$ = interval(1000).pipe(
          map(n => this.meses[n % this.meses.length]),
          take(this.meses.length)); 

    this.personasCada330$ = interval(330).pipe(
      map ( n => this.personas[n % this.personas.length]),
      take(this.personas.length));

      const cartesiano$ = this.mesesCada1000milis$.pipe(
        mergeMap(mes => this.personasCada330$.pipe(
          map(per => mes + ' - ' + per)
        ))
      );
      cartesiano$.subscribe((val:any) => console.log('\t' + val));   
  }

  probarCombinacionSwitchMap(){
    this.mesesCada1000milis$ = interval(1000).pipe(
          map(n => this.meses[n % this.meses.length]),
          take(this.meses.length)); 

    this.personasCada330$ = interval(330).pipe(
      map ( n => this.personas[n % this.personas.length]),
      take(this.personas.length));

      const cartesiano$ = this.mesesCada1000milis$.pipe(
        switchMap(mes => this.personasCada330$.pipe(
          map(per => mes + ' - ' + per)
        ))
      );
      cartesiano$.subscribe((val:any) => console.log('\t' + val));   
  }
  probarCombinacionExhaustMap(){
    this.mesesCada1000milis$ = interval(1000).pipe(
          map(n => this.meses[n % this.meses.length]),
          take(this.meses.length)); 

    this.personasCada330$ = interval(330).pipe(
      map ( n => this.personas[n % this.personas.length]),
      take(this.personas.length));

      const cartesiano$ = this.mesesCada1000milis$.pipe(
        exhaustMap(mes => this.personasCada330$.pipe(
          map(per => mes + ' - ' + per)
        ))
      );
      cartesiano$.subscribe((val:any) => console.log('\t' + val));   
  }
}
