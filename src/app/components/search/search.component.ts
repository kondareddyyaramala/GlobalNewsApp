import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NEWS_SOURCES } from '../../common/news-sources';
import { Source } from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() loadNewsData: EventEmitter<string> =  new EventEmitter<string>();
  public selectedNewsSource: Source;
  public newsSources: Array<Source>;

  constructor() { }

  ngOnInit() {
    this.newsSources = NEWS_SOURCES;
    this.selectedNewsSource = NEWS_SOURCES[0];
    this.loadData();
  }

  loadData(){
    this.loadNewsData.emit(this.selectedNewsSource.id);
  }

}
