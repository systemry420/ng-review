import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { News } from '../models/News.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  public getNews() {
    return this.http.get('https://bing-news-search1.p.rapidapi.com/news', {
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '961167a451msh8afa8d55046ffa0p1cee47jsne8ccfb801fe4'
      }
    })
    .pipe(
      tap(console.log),
      map((response: any) => {
        return response['value'].map((news: any, idx: number) => {
            return new News(idx, news.name, news.datePublished, news.description, news?.image?.thumbnail.contentUrl)
        })
      })
    )
  }

  /**
   * getSingle
   */
  public getSingle(id: string) {
    
  }
}
