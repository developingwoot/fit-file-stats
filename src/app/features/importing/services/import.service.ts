import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fit from 'fit-file-parser';
import * as fromStore from '../../../store';

import { FitData } from '../../../base/models/fit-data';

@Injectable({ providedIn: 'root' })
export class ImportService {
  constructor(private store: Store<fromStore.State>) {}

  importFile(file: any): void {
    // Create a FitParser instance (options argument is optional)
    var fitParser = new fit.default({
      force: true,
      speedUnit: 'mph',
      lengthUnit: 'mi',
      temperatureUnit: 'kelvin',
      elapsedRecordField: true,
      mode: 'cascade',
    });

    console.log(file);

    // Parse your file
    fitParser.parse(file, (error, data: FitData): void => {
      if (error) {
        // dispatch error
      } else {
        // dispatch data
        const { activity } = data;
        this.store.dispatch(fromStore.addFitFile({ activity }));
      }
    });
  }
}
