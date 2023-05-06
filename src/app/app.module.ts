import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { RepasoArreglosComponent } from './repaso-arreglos/repaso-arreglos.component';
import { TestRxjs01Component } from './test-rxjs01/test-rxjs01.component';

@NgModule({
  declarations: [
    AppComponent,
    TestObservableComponent,
    RepasoArreglosComponent,
    TestRxjs01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
