import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';
import serviceEndPoints from  './endpoints';
import 'rxjs/add/operator/map'
import { Source } from 'app/models';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  getNewsData(newsSourceId: string): Observable<News>{
    return this.http.get(serviceEndPoints.newsApi({ newsSourceId: newsSourceId})).map(res => new News(res.json()));
  }

  getNewsSources(): Observable<Array<Source>> {
    return this.http.get(serviceEndPoints.newsApiSources())
      .map(res => res && res.json() && res.json().sources)
      .map(sources => sources.map(source => new Source(source)));
  }

}
