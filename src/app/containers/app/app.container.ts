import { ToasterConfig } from 'angular2-toaster';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  } from '../../common/styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss', '../../common/styles/global.scss']
})
export class AppContainer {
  toasterconfig: ToasterConfig;

  constructor() {
    this.toasterconfig = new ToasterConfig({
      showCloseButton: { 'warning': true, 'error': false },
      tapToDismiss: false,
      timeout: 6000,
      mouseoverTimerStop: false,
      preventDuplicates: false
    });
  }
}
