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
  
  constructor(
    private movieApiService: MovieApiService
  ) { }

  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
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
      console.log(data);
      this.trendingResult = data.results
    })
  }

}
