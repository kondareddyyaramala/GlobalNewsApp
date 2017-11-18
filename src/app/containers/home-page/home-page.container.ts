import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home-page.container.html',
  styleUrls: ['./home-page.container.scss']
})
export class HomePageContainer {
  public ladingDataTableColumns: Array<string> = [
    'quoteNumber', 'branchCode', 'customerNumber', 'customerName', 'billToState'
  ];

  public ladingDataRows = [{
    'quoteNumber': '1233',
    'branchCode' : '23',
    'customerName': 'Sam Josh',
    'customerNumber': 440,
  }, {
    'quoteNumber': '12303',
    'branchCode' : '23',
    'customerName': 'Sam Josh',
    'customerNumber': 445,
  },{
    'quoteNumber': '1233',
    'branchCode' : '23',
    'customerName': 'Sam Josh',
    'customerNumber': 4488,
  }, {
    'quoteNumber': '1233',
    'branchCode' : '23',
    'customerName': 'Sam Josh',
    'customerNumber': 443,
  }];
}
