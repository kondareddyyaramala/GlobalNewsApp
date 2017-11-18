import { Source } from "./source.model";


export class Article {
  source : Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;

  constructor(config){
    config = config || {};
    this.source = config.source;
    this.author = config.author;
    this.title = config.title;
    this.description = config.description;
    this.url = config.url;
    this.urlToImage = config.urlToImage;
    this.publishedAt = config.publishedAt;
  }
}