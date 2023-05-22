import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { RepasoArreglosComponent } from './repaso-arreglos/repaso-arreglos.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';
import { TestIntervalComponent } from './test-interval/test-interval.component';
import { TestErroresComponent } from './test-errores/test-errores.component';
import { EjerTakeUltilComponent } from './ejer-take-ultil/ejer-take-ultil.component';
import { EjerMergeComponent } from './ejer-merge/ejer-merge.component';
import { EjerConcatComponent } from './ejer-concat/ejer-concat.component';
import { TestDebounceComponent } from './test-debounce/test-debounce.component';
import { TestThrottleComponent } from './test-throttle/test-throttle.component';
import { ConsultadorGatosComponent } from './consultador-gatos/consultador-gatos.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { NotificadorBajaComponent } from './notificador-baja/notificador-baja.component';
import { TestCombinaObsComponent } from './test-combina-obs/test-combina-obs.component';
import { TestAjax01Component } from './test-ajax01/test-ajax01.component';
import { TestCombinaObs02Component } from './test-combina-obs02/test-combina-obs02.component';

@NgModule({
  declarations: [
    AppComponent,
    TestObservableComponent,
    RepasoArreglosComponent,
    TestRxjs01Component,
    TestIntervalComponent,
    TestErroresComponent,
    EjerTakeUltilComponent,
    EjerMergeComponent,
    EjerConcatComponent,
    TestDebounceComponent,
    TestThrottleComponent,
    ConsultadorGatosComponent,
    ContenedorComponent,
    NotificadorBajaComponent,
    TestCombinaObsComponent,
    TestAjax01Component,
    TestCombinaObs02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
