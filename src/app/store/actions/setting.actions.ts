import { createAction, props } from '@ngrx/store';

import { Setting } from '../../base/models/settings';

export const loadSettings = createAction('[Settings] Load Settings');
export const loadSettingsFail = createAction('[Settings] Load Settings Fail');
export const loadSettingsSuccess = createAction(
  '[Settings] Load Settings Success'
);

export const saveSettings = createAction(
  '[Settings] Save Settings',
  props<{ settings: Setting }>()
);
export const saveSettingsFail = createAction('[Settings] Save Settings Fail');
export const saveSettingsSuccess = createAction(
  '[Settings] Save Settings Settings'
);
