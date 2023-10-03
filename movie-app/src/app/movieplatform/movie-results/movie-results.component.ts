import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/movie/movie.model';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css']
})
export class MovieResultsComponent {

  allMovies: Movie[] = [
    new Movie(
      'Paw Patrol: The Mighty Movie',
      'Cal Brunker',
      'Adventure',
      'The movie summary here',
       new Date(2023, 9, 29),
       '1 hour 28 mins',
       'Marsai Martin, Brice Gonzalez, Kristen Bell, Christian Convery, Taraji P. Henson',
       'PG',
       'USA',
       'English',
       '$1,000,000.50',
       'assets/movie1.jpg'
  ),

  new Movie(
    'Paw Patrol: The Mighty Movie',
    'Cal Brunker',
    'Adventure',
    'The movie summary here',
     new Date(2023, 9, 29),
     '1 hour 28 mins',
     'Marsai Martin, Brice Gonzalez, Kristen Bell, Christian Convery, Taraji P. Henson',
     'PG',
     'USA',
     'English',
     '$1,000,000.50',
     'assets/movie1.jpg'
),

new Movie(
  'Paw Patrol: The Mighty Movie',
  'Cal Brunker',
  'Adventure',
  'The movie summary here',
   new Date(2023, 9, 29),
   '1 hour 28 mins',
   'Marsai Martin, Brice Gonzalez, Kristen Bell, Christian Convery, Taraji P. Henson',
   'PG',
   'USA',
   'English',
   '$1,000,000.50',
   'assets/movie1.jpg'
),

];
}
