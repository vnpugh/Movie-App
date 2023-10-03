import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieplatformComponent } from './movieplatform/movieplatform.component';
import { MoviecollectionComponent } from './moviecollection/moviecollection.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MovieComponent } from './shared/movie/movie.component';
import { MovieListComponent } from './moviecollection/movie-list/movie-list.component';
import { MovieDetailsComponent } from './moviecollection/movie-details/movie-details.component';
import { MovieResultsComponent } from './movieplatform/movie-results/movie-results.component';
import { MovieSearchComponent } from './movieplatform/movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieplatformComponent,
    MoviecollectionComponent,
    NavigationComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieResultsComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
