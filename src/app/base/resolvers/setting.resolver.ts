import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import * as fromStore from '../../store';

@Injectable()
export class SettingsResolver implements Resolve<boolean> {
  constructor(private store: Store<fromStore.State>) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(fromStore.selectSettingsLoaded),
      map((loaded) => {
        if (!loaded) {
          this.store.dispatch(fromStore.loadSettings());
        }

        console.log(loaded);
        return loaded;
      }),
      filter((loaded) => loaded),
      take(1)
    );
  }
}
