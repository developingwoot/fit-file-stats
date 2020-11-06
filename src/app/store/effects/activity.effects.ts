import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';

import { ActivityService } from '../../base/services/activity.service';
import * as fromActions from '../actions';

@Injectable()
export class ActivityEffects {
  saveActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addFitFile),
      switchMap((action) =>
        this.activityService.addRecord(action.activity).pipe(
          map((result) => {
            console.log('saved', result);
            return fromActions.addFitFileSuccess();
          }),
          catchError((error) => of(fromActions.addFitFileFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private activityService: ActivityService
  ) {}
}
