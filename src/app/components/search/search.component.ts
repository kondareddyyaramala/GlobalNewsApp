import { Component, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Source } from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  @Input() newsSources: Array<Source> = [];
  @Output() loadNewsData: EventEmitter<string> =  new EventEmitter<string>();
  public selectedNewsSource: Source;

  constructor() { }

  ngOnChanges(changes) {
    if(changes && changes.newsSources){
      this.selectedNewsSource = this.newsSources[0];
    }
  }

  loadData(){
    this.loadNewsData.emit(this.selectedNewsSource.id);
  }

}
