import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { News } from 'src/app/models/News.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  news$ = new Observable<News[]>();

  constructor(
    private newsService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.news$ = this.newsService.getNews()
  }

}
