import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxArTestLibModule } from 'projects/ngx-ar-test-lib/src/public-api'; // you can import from npm repo also, if you had published

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxArTestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
