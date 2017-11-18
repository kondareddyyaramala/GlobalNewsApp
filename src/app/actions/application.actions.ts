import { Action } from '@ngrx/store';
import { type } from './util';

export const actionTypes = {
  APPLICATION_MASK_LOADING: type('[Application] Application Mask Loading'),
};

export class ApplicationMaskLoading implements Action {
  type = actionTypes.APPLICATION_MASK_LOADING;
  constructor(public enabled: boolean, public message?: string) { }
}

export type Actions =
  ApplicationMaskLoading;
