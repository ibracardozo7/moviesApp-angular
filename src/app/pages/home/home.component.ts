import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerResult: any[] = [];
  trendingResult: any[] = [];
  actionMovieResult: any[] = [];
  adventureMovieResult: any[] = [];
  animationMovieResult: any[] = [];
  comedyMovieResult: any[] = [];
  documentaryMovieResult: any[] = [];
  scienceMovieResult: any[] = [];
  thrillerMovieResult: any[] = [];
  
  constructor(
    private movieApiService: MovieApiService
  ) { }

  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
    this.actionMovie()
    this.adventureMovie()
    this.animationMovie()
    this.comedyMovie()
    this.documentaryMovie()
    this.scienceMovie()
    this.thrillerMovie()
  }

  bannerData() {
    this.movieApiService.bannerApiData()
    .subscribe(data => {
      // console.log(data.results);
      this.bannerResult = data.results
    })
  }

  trendingData() {
    this.movieApiService.trendingMovieApiData()
    .subscribe(data => {
      // console.log(data);
      this.trendingResult = data.results
    })
  }

  actionMovie() {
    this.movieApiService.fetchActionMovies()
    .subscribe(data => {
      console.log(data,"action");
      this.actionMovieResult = data.results
    })
  }

  adventureMovie() {
    this.movieApiService.fetchAdventureMovies()
    .subscribe(data => {
      console.log(data,"adventure");
      this.adventureMovieResult = data.results
    })
  }

  animationMovie() {
    this.movieApiService.fetchAnimationMovies()
    .subscribe(data => {
      console.log(data,"animation");
      this.animationMovieResult = data.results
    })
  }

  comedyMovie() {
    this.movieApiService.fetchComedyMovies()
    .subscribe(data => {
      console.log(data,"comedy");
      this.comedyMovieResult = data.results
    })
  }

  documentaryMovie() {
    this.movieApiService.fetchDocumentaryMovies()
    .subscribe(data => {
      console.log(data,"documentary");
      this.documentaryMovieResult = data.results
    })
  }

  scienceMovie() {
    this.movieApiService.fetchScienceMovies()
    .subscribe(data => {
      console.log(data,"science");
      this.scienceMovieResult = data.results
    })
  }

  thrillerMovie() {
    this.movieApiService.fetchThrillerMovies()
    .subscribe(data => {
      console.log(data,"thriller");
      this.thrillerMovieResult = data.results
    })
  }
}
