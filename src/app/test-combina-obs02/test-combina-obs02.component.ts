import { Component, AfterViewInit } from '@angular/core';
import { Subscription, fromEvent, interval, map, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-test-combina-obs02',
  templateUrl: './test-combina-obs02.component.html',
  styleUrls: ['./test-combina-obs02.component.css']
})
export class TestCombinaObs02Component implements AfterViewInit{
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

    this.clicksBtnConcatMap$ = fromEvent(this.btnConcatMap!,'click');
    this.clicksBtnConcatMapConSwitchMap$ = this.clicksBtnConcatMap$.pipe(
      switchMap( 
        evt => {
          this.nBcm++;
          return interval(500).pipe(
                map ( n => "concatMap " + this.nBcm),
                take (10))
      })
    );

    this.clicksBtnMergeMap$ = fromEvent(this.btnMergeMap!,'click');
    this.clicksBtnMergeMapConSwitchMap$ = this.clicksBtnMergeMap$.pipe(
      switchMap( 
        evt => {
          this.nBmm++;
          return interval(500).pipe(
                map ( n => "mergeMap " + this.nBmm),
                take (10))
      })
    );

    this.clicksBtnConcatMap$.subscribe(
      () => this.activarSuscripcionConcat()
    );
    this.clicksBtnMergeMap$.subscribe(
      () => this.activarSuscripcionMerge()
    );
  }

  activarSuscripcionConcat(): void {
    if(this.suscripcionActiva === 'concat')
      return;
    if(this.suscripcionActiva === ''){
      this.suscrCBcM = this.clicksBtnConcatMapConSwitchMap$.subscribe( 
        (val:any) => console.log(val));
      this.suscripcionActiva = 'concat';     
    }
    else{
      this.suscrCBmM?.unsubscribe();
      this.suscrCBcM = this.clicksBtnConcatMapConSwitchMap$.subscribe( 
        (val:any) => console.log(val));
      this.suscripcionActiva = 'concat';     
    }
    
  }

  activarSuscripcionMerge() {
    if(this.suscripcionActiva === 'merge')
      return;
    if(this.suscripcionActiva === ''){
      this.suscrCBcM = this.clicksBtnMergeMapConSwitchMap$.subscribe( 
        (val:any) => console.log(val));
      this.suscripcionActiva = 'merge';     
    }
    else{
      this.suscrCBcM?.unsubscribe();
      this.suscrCBcM = this.clicksBtnMergeMapConSwitchMap$.subscribe( 
        (val:any) => console.log(val));
      this.suscripcionActiva = 'merge';     
    }
  }

}
