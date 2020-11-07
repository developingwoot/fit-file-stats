import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';

import { SettingsService } from '../../base/services/settings.service';
import * as fromActions from '../actions';

@Injectable()
export class SettingEffects {
  saveSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveSettings),
      switchMap((action) =>
        this.service.updateSettings(action.settings).pipe(
          map((result) => {
            console.log('saved', result);
            return fromActions.saveSettingsSuccess();
          }),
          catchError((error) => of(fromActions.saveSettingsFail({ error })))
        )
      )
    )
  );

  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadSettings),
      switchMap((action) =>
        this.service.getSettings().pipe(
          map((settings) => {
            return fromActions.loadSettingsSuccess({ settings });
          }),
          catchError((error) => of(fromActions.saveSettingsFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: SettingsService) {}
}
