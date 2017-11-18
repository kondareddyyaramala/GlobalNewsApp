import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';
import serviceEndPoints from  './endpoints';
import 'rxjs/add/operator/map'

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  getNewsData(newsSourceId: string): Observable<News>{
    return this.http.get(serviceEndPoints.newsApi({ newsSourceId: newsSourceId})).map(res => new News(res.json()));
  }

}
