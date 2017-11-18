import { ApplicationActions } from '../../app/actions';



export interface State {
  loadingMaskEnabled: boolean,
  loadingMaskMessage: string,
};

const initialState: State = {
  loadingMaskEnabled: false,
  loadingMaskMessage: '',
};

export function reducer(state = initialState, action: ApplicationActions.Actions): State {
  switch (action.type) {
    case ApplicationActions.actionTypes.APPLICATION_MASK_LOADING: {
      const actionMapping = action as ApplicationActions.ApplicationMaskLoading;
      return Object.assign({}, state, {
        loadingMaskEnabled: actionMapping.enabled,
        loadingMaskMessage: actionMapping.message || ''
      });
    }
    default: {
      return state;
    }
  }
}

export const getApplicationLoadingMaskState = (state: State) => { return { enabled: state.loadingMaskEnabled, message: state.loadingMaskMessage } };
