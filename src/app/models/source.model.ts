import constructObject from "app/common/utils";

export class Source {
  name: string;
  id: string;
  url: string;
  category: string;
  language: string;
  country: string;

  constructor(config){
    constructObject(config, this);
  }
}