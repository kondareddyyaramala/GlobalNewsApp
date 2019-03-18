import { Article } from './article.model';
import constructObject from 'app/common/utils';

export class News {
  status: string;
  articles: Array<Article>;

  constructor(config){
    constructObject(config, this);
  }

}