import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Activity } from '../models/fit-data';
import { DataStore } from './db.service';

@Injectable({ providedIn: 'root' })
export class ActivityService {
  db: DataStore;
  constructor() {
    this.db = new DataStore();
  }

  addRecord(activity: Activity): Observable<Activity> {
    return this.db.find({ timestamp: activity.timestamp }).pipe(
      switchMap((data: any) => {
        if (!data) {
          return this.db.insert(activity);
        }

        return of(console.log('already exists'));
      })
    );
  }
}
