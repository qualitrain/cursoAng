import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { RepasoArreglosComponent } from './repaso-arreglos/repaso-arreglos.component';

@NgModule({
  declarations: [
    AppComponent,
    TestObservableComponent,
    RepasoArreglosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
