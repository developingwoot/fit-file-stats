import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from '../../../store';
import { Setting } from '../../../base/models/settings';

@Component({
  template: `
    <div class="margin-1">
      <h2>Settings</h2>
      <app-settings-form
        [settings]="settings | async"
        [saving]="false"
        (save)="onSave($event)"
      ></app-settings-form>
    </div>
  `,
})
export class SettingsComponent implements OnInit {
  settings: Observable<Setting>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.settings = this.store.pipe(select(fromStore.selectSettings));
  }

  onSave(settings: Setting) {
    this.store.dispatch(fromStore.saveSettings({ settings }));
  }
}
