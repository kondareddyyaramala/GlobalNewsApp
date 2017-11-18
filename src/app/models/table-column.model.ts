import { Component } from '@angular/core';

export class TableColumn {
  name?: string; // when using headerTemplate, the name property is no longer needed
  prop: string;
  headerTemplate?: Component;
  headerClass?: Component;
  cellTemplate?: Component;
  cellClass?: any; // string | function (value, row, column) => string
  width?: number;
  sort: string;
  sortable?: boolean;

  constructor(config: any) {
    config = config || {};
    this.cellTemplate = config.cellTemplate;
    this.headerTemplate = config.headerTemplate;
    this.headerClass = config.headerClass;
    this.name = config.name;
    this.prop = config.prop;
    this.cellClass = config.cellClass;
    this.width = config.width;
    this.sort = config.sort;
    this.sortable = config.sortable;
  }
}
