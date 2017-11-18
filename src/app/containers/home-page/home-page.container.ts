import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Article } from '../../models';

@Component({
  selector: 'home',
  templateUrl: './home-page.container.html',
  styleUrls: ['./home-page.container.scss']
})
export class HomePageContainer {
  public newsSourceId: string = 'the-hindu';
  public articles: Array<Article> = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNewsData(this.newsSourceId).subscribe(
      news => {
        if (news && news.articles) {
          this.articles = news.articles;
        }
      }
    );
  }
}
