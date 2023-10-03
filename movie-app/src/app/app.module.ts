import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieplatformComponent } from './movieplatform/movieplatform.component';
import { MoviecollectionComponent } from './moviecollection/moviecollection.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MovieComponent } from './shared/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieplatformComponent,
    MoviecollectionComponent,
    NavigationComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
