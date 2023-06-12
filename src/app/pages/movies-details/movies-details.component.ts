import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit {
  movieDetailResult: any;
  movieVideoResult: any;
  movieCastResult: any;
  
  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const getParamId = this.route.snapshot.paramMap.get('id')
    console.log(getParamId);
    
    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id: any) {
    this.movieApiService.getMovieDetails(id).subscribe((data) => {
      console.log(data);
      this.movieDetailResult = data
    });
  }

  getVideo(id: any) {
    this.movieApiService.getMovieVideo(id)
    .subscribe(data => {
      console.log("movie->", data);
      data.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.movieVideoResult = element.key
        }
      })
    })
  }

  getMovieCast(id: any) {
    this.movieApiService.getMovieCast(id)
    .subscribe(data => {
      console.log("credit->", data);
      this.movieCastResult = data.cast
    })
  }
}
