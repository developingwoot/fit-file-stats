import { createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers';
import { Activity } from '../../base/models/fit-data';

const selectFeature = (state: fromReducer.State) => state;

export const selectAllActivities = createSelector(
  selectFeature,
  fromReducer.selectActivityFeature,
  (state: fromReducer.State) => {
    return state.activity.activities;
  }
);
