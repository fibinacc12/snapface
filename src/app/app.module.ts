import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
// import * as ar from '@angular/common/locales/ar';
import * as fr from '@angular/common/locales/fr';


import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'ar-AE' },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // registerLocaleData(ar.default);
    registerLocaleData(fr.default);
  }
}
