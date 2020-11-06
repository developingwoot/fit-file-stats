import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromActivity from './activity.reducer';

export interface State {
  activity: fromActivity.State;
}

export const reducers: ActionReducerMap<State> = {
  activity: fromActivity.reducer,
};

export const selectActivityFeature = (state: State) => state.activity;

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
