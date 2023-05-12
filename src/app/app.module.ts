import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { RepasoArreglosComponent } from './repaso-arreglos/repaso-arreglos.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';
import { TestIntervalComponent } from './test-interval/test-interval.component';
import { TestErroresComponent } from './test-errores/test-errores.component';

@NgModule({
  declarations: [
    AppComponent,
    TestObservableComponent,
    RepasoArreglosComponent,
    TestRxjs01Component,
    TestIntervalComponent,
    TestErroresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
