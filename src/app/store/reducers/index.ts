import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromActivity from './activity.reducer';
import * as fromSettings from './setting.reducer';

export interface State {
  activity: fromActivity.State;
  settings: fromSettings.SettingState;
}

export const reducers: ActionReducerMap<State> = {
  activity: fromActivity.reducer,
  settings: fromSettings.reducer,
};

export const selectActivityFeature = (state: State) => state.activity;
export const selectSettingsFeature = (state: State) => state.settings;

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
