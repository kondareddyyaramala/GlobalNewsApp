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
  public isLoading: boolean = false;
  public loadingMessage: string = 'Loading...';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(newsSourceId?){
    this.isLoading = true;
    this.newsService.getNewsData(newsSourceId ? newsSourceId : this.newsSourceId).subscribe(
      news => {
        if (news && news.articles) {
          this.articles = news.articles;
          this.isLoading = false;
        }
      }
    );
  }

  loadNewsData(newsSourceId: string){
    this.loadData(newsSourceId);
  }
}
