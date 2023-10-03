import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieplatformComponent } from './movieplatform/movieplatform.component';
import { MoviecollectionComponent } from './moviecollection/moviecollection.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieplatformComponent,
    MoviecollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
