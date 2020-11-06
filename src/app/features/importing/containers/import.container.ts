import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/base/models/fit-data';

import * as fromStore from '../../../store';
import { ImportService } from '../services/import.service';

@Component({
  selector: 'app-import',
  template: `
    <div>
      <div *ngIf="error">
        {{ error }}
      </div>
      <div *ngIf="uploadResponse.status === 'error'">
        {{ uploadResponse.message }}
      </div>
      <div *ngIf="uploadResponse.status === 'progress'">
        <div
          role="progressbar"
          [style.width.%]="uploadResponse.message"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ uploadResponse.message }}%
        </div>
      </div>

      <form>
        <input type="file" (change)="onFileChange($event)" multiple />
      </form>
    </div>
    <app-dashboard [activities]="activites$ | async"></app-dashboard>
  `,
})
export class ImportComponent implements OnInit {
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

  activites$: Observable<Activity[]>;

  constructor(
    private uploadService: ImportService,
    private store: Store<fromStore.State>
  ) {}

  ngOnInit() {
    this.activites$ = this.store.pipe(select(fromStore.selectAllActivities));
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      for (var i = 0; i < event.target.files.length; i++) {
        const file: File = event.target.files[i];
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          this.uploadService.importFile(fileReader.result);
        };
        fileReader.readAsArrayBuffer(file);
      }
    }
  }
}
