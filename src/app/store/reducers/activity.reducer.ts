import { Action, createReducer, on } from '@ngrx/store';

import { Activity } from '../../base/models/fit-data';

import * as featureActions from '../actions';

export interface State {
  activities: Activity[];
}

export const initialState: State = {
  activities: [],
};

const featureReducer = createReducer(
  initialState,
  on(featureActions.addFitFile, (state, action) => ({
    ...state,
    activities: [...state.activities, action.activity],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
