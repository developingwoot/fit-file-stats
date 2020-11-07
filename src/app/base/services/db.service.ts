import * as dataStore from 'nedb';
import { Observable } from 'rxjs';

import * as fit from 'fit-file-parser';
import { FitData } from '../../base/models/fit-data';

export class DataStore {
  private db: any;

  constructor() {
    this.db = new dataStore({
      filename: './cycle-stats-dataset',
      autoload: true,
    });
  }

  insert<T>(document: T): Observable<T> {
    return new Observable((observer) => {
      this.db.insert(document, (error, doc) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(doc);
        }

        observer.complete();
      });
    });
  }

  update<T>(document: any): Observable<T> {
    return new Observable((observer) => {
      this.db.update({ _id: document._id }, document, {}, (error, doc) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(doc);
        }

        observer.complete();
      });
    });
  }

  delete(id: string): Observable<number> {
    return new Observable((observer) => {
      this.db.remove({ _id: id }, {}, (error, numRemoved) => {
        if (error) {
          console.log('error', error);
          observer.error(error);
        } else {
          console.log(numRemoved);
          observer.next(numRemoved);
        }
        observer.complete();
      });
    });
  }

  find(query: any): any {
    return new Observable((observer) => {
      this.db.find(query, (error, results) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(results);
        }

        observer.complete();
      });
    });
  }

  findOne(query: any): any {
    return new Observable((observer) => {
      this.db.find(query, (error, results) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(results[0]);
        }

        observer.complete();
      });
    });
  }

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
        // this.store.dispatch(fromStore.addFitFile({ activity }));
      }
    });
  }
}
