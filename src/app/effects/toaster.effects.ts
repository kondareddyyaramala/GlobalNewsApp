import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import * as fromReducers from '../reducers';
import { ToasterMessageComponent } from "../components/toaster-message/toaster-message.component";
import { ToasterService, BodyOutputType } from 'angular2-toaster';
import { ToastInterface } from '../models/toaster.interface';
import { ToasterActions } from '../actions';

@Injectable()
export class ToasterEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducers.State>,
    private toasterService: ToasterService
  ) { }

  @Effect()
  toastSuccess$: Observable<Action> = this.actions$
    .ofType(ToasterActions.actionTypes.DISPLAY_MESSAGE)
    .map((action: ToasterActions.DisplayMessage) => action.payload)
    .switchMap(payload => {
      const toastComponent: ToastInterface = {
        type: payload.type,
        title: payload.title,
        body: ToasterMessageComponent,
        bodyOutputType: BodyOutputType.Component,
        showCloseButton: true,
        timeout: payload.timeoutOption >= 0 ? payload.timeoutOption : 5000,
        templatePayload: payload  
      };
      return of(this.toasterService.pop(toastComponent));
    });
}
