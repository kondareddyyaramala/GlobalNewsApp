import { Action } from '@ngrx/store';
import { type } from './util';
import { BodyOutputType } from 'angular2-toaster';
import { ToastPayloadInterface } from '../models/toaster.interface';

export const actionTypes = {
  DISPLAY_MESSAGE:        type('[Toaster] Display Message')
};

export class DisplayMessage implements Action {
  type = actionTypes.DISPLAY_MESSAGE;
  constructor(public payload: ToastPayloadInterface) {
  }
}

export type Actions =  DisplayMessage;

