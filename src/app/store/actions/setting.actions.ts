import { createAction } from '@ngrx/store';

export const loadSettings = createAction('[Settings] Load Settings');
export const loadSettingsFail = createAction('[Settings] Load Settings Fail');
export const loadSettingsSuccess = createAction(
  '[Settings] Load Settings Success'
);

export const saveSettings = createAction('[Settings] Save Settings');
export const saveSettingsFail = createAction('[Settings] Save Settings Fail');
export const saveSettingsSuccess = createAction(
  '[Settings] Save Settings Settings'
);
