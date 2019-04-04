import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable, Subscription } from 'rxjs';
import { Article, Source } from '../../models';

@Component({
  selector: 'home',
  templateUrl: './home-page.container.html',
  styleUrls: ['./home-page.container.scss']
})
export class HomePageContainer {
  public articles: Array<Article> = [];
  public sources: Array<Source> = [];
  public isLoading: boolean = false;
  public loadingMessage: string = 'Loading.....';

  private subscriptions: Subscription[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadNewsSources();
  }

  loadNewsSources() {
    this.isLoading = true;
    this.subscriptions.push(this.newsService.getNewsSources().subscribe(resp => {
      this.sources = resp
      // load the news for the first source
      this.loadData(this.sources[0].id);
    }));
  }

  // Load news data
  loadData(newsSourceId?) {
    this.isLoading = true;
    this.subscriptions.push(this.newsService.getNewsData(newsSourceId).subscribe(
      news => {
        if (news && news.articles) {
          this.articles = news.articles;
          this.isLoading = false;
        }
      },
      error => {
        this.isLoading = false;
      }
    ));
  }

  loadNewsData(newsSourceId: string) {
    this.loadData(newsSourceId);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s => s && s.unsubscribe());
  }
}
