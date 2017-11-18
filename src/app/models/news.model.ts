import { Article } from './article.model';

export class News {
  status: string;
  articles: Array<Article>;

  constructor(config){
    config = config || {};
    this.status = config.status;
    this.articles = config.articles;
  }

}