import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromApplication from './application.reducer';


export interface State {
     application: fromApplication.State;
}

 const reducers = {
     application: fromApplication.reducer
};

//Store freeeze will helps  you make sure you are not mutating anyobject have to use it later.
const developmentReducer: ActionReducer<State> = compose(storeFreeze ,combineReducers)(reducers); //compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);


export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


export const getApplicationState = (state: State) => state.application;
export const getApplicationLoadingMaskState = createSelector(getApplicationState, fromApplication.getApplicationLoadingMaskState);


