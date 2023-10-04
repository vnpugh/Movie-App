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
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

//Angular Material import modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ //only for the components, directives, and pipes
    AppComponent,
    MovieplatformComponent,
    MoviecollectionComponent,
    NavigationComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieResultsComponent,
    MovieSearchComponent,
    LoginComponent,
    HomepageComponent,

  ],
  imports: [ //material modules added to imports array
    BrowserModule,
    BrowserAnimationsModule, //animations
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
