import { AfterViewInit, Component } from '@angular/core';
import { Subscription, fromEvent, interval, map, merge, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-test-combina-obs03',
  templateUrl: './test-combina-obs03.component.html',
  styleUrls: ['./test-combina-obs03.component.css']
})
export class TestCombinaObs03Component implements AfterViewInit{
  btnConcatMap: HTMLElement | null | undefined;
  btnMergeMap: HTMLElement | null | undefined;

  clicksBtnConcatMap$: any;
  nBcm:number = 0;

  clicksBtnMergeMap$: any;
  nBmm:number = 0;
  suscrCBcM: Subscription|undefined;
  suscrCBmM: Subscription|undefined;
  clicksBtnConcatMapConSwitchMap$: any;
  clicksBtnMergeMapConSwitchMap$: any;
  suscripcionActiva: string='';

  ngAfterViewInit(): void {
    this.btnConcatMap = document.getElementById("btnConcatMap");
    this.btnMergeMap =  document.getElementById("btnMergeMap");

    this.clicksBtnConcatMap$ = fromEvent(this.btnConcatMap!,'click').pipe(
      map(evt => 'C') );
    this.clicksBtnMergeMap$ = fromEvent(this.btnMergeMap!,'click').pipe(
      map(evt => 'M') );    
      
    const clicksBotones$ = merge(this.clicksBtnConcatMap$, this.clicksBtnMergeMap$);

    const clickBotonesSwitchMap$ = clicksBotones$.pipe(
      switchMap( tipo => {
        if(tipo === 'C'){
          this.nBcm++;
          return interval(500).pipe(
                map ( n => "concatMap " + this.nBcm),
                take (10))        
        }
        else{
          this.nBmm++;
          return interval(500).pipe(
                map ( n => "mergeMap " + this.nBmm),
                take (10))          
        }
      })
    );


    clickBotonesSwitchMap$.subscribe(
      val => console.log(val)
    )
    

  }


}

