import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// you can import from npm repo also, if you had it published to npm
import { MdInputModule } from 'projects/md-input/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
