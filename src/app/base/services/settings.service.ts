import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Setting } from '../models/settings';
import { StoreType } from '../models/store-type';
import { DataStore } from './db.service';

@Injectable({ providedIn: 'root' })
export class SettingsService extends DataStore {
  constructor() {
    super();
  }

  getSettings(): Observable<Setting> {
    return this.findOne({ storeType: StoreType.Settings });
  }

  updateSettings(settings: Setting): Observable<Setting> {
    if (settings._id) {
      return this.update<Setting>(settings);
    }

    return this.insert<Setting>(settings);
  }
}
