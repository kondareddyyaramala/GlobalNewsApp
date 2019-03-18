import { Source } from "./source.model";
import constructObject from "app/common/utils";


export class Article {
  source : Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;

  constructor(config){
    constructObject(config, this);
  }
}