import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';
import { Setting } from '../../../base/models/settings';

@Component({
  template: `
    <div class="margin-1">
      <h2>Settings</h2>
      <app-settings-form
        [saving]="false"
        (save)="onSave($event)"
      ></app-settings-form>
    </div>
  `,
})
export class SettingsComponent {
  constructor(private store: Store<fromStore.State>) {}

  onSave(settings: Setting) {
    this.store.dispatch(fromStore.saveSettings({ settings }));
  }
}
