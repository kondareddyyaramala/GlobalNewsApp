export class Source {
  name: string;
  id: string;

  constructor(config){
    config = config || {};
    this.name = config.name;
    this.id = config.id;
  }
}