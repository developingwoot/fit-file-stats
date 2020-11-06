import { createAction, props } from '@ngrx/store';
import { Activity } from '../../base/models/fit-data';

export const addFitFile = createAction(
  '[Import] Add Fit File',
  props<{ activity: Activity }>()
);
export const addFitFileFail = createAction(
  '[Import] Add Fit File Fail',
  props<{ error: any }>()
);
export const addFitFileSuccess = createAction('[Import] Add Fit File Success');
