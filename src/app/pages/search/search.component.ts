import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })
  searchResult: any[] = []

  constructor(
    private movieApiService: MovieApiService
  ) { }
  
  ngOnInit(): void {}


  submitForm() {
    console.log(this.searchForm.value);
    const movie = this.searchForm.value
    this.movieApiService.searchMovie(movie)
    .subscribe((result) => {
      console.log("-->", result);
      this.searchResult = result.results
    })
  }
}
