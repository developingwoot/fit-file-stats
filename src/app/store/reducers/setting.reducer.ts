import { Action, createReducer, on } from '@ngrx/store';

import {
  LengthUnit,
  Setting,
  SpeedUnit,
  TempertureUnit,
  WeightUnit,
} from '../../base/models/settings';
import { StoreType } from '../../base/models/store-type';

import * as fromActions from '../actions/setting.actions';

export interface SettingState {
  _id: string;
  dob: Date;
  weight: number;
  weightUnit: WeightUnit;
  lengthUnit: LengthUnit;
  speedUnit: SpeedUnit;
  tempertureUnit: TempertureUnit;
  storeType: StoreType;
  savingSettings: boolean;
  loaded: boolean;
}

export const initialState: SettingState = {
  _id: null,
  dob: null,
  weight: 0,
  weightUnit: WeightUnit.pound,
  lengthUnit: LengthUnit.miles,
  speedUnit: SpeedUnit.MilesPerHour,
  tempertureUnit: TempertureUnit.Fahrenheit,
  storeType: StoreType.Settings,
  savingSettings: false,
  loaded: false,
};

const featureReducer = createReducer(
  initialState,
  on(fromActions.saveSettings, (state, action) => ({
    ...state,
    ...action.settings,
    savingSettings: true,
  })),
  on(fromActions.saveSettingsSuccess, (state, action) => ({
    ...state,
    savingSettings: false,
  })),
  on(fromActions.loadSettingsSuccess, (state, action) => {
    return {
      ...state,
      ...action.settings,
      loaded: true,
    };
  })
);

export function reducer(state: SettingState | undefined, action: Action) {
  return featureReducer(state, action);
}
