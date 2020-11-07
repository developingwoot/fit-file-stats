import { createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers';
import * as fromSettings from '../reducers/setting.reducer';

const selectFeature = (state: fromReducer.State) => state;

export const selectSettings = createSelector(
  selectFeature,
  fromReducer.selectSettingsFeature,
  (state: fromReducer.State) => {
    return state.settings;
  }
);

export const selectSettingsLoaded = createSelector(
  selectSettings,
  (state: fromSettings.SettingState) => state.loaded
);
