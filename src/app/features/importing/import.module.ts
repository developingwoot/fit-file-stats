import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { BaseModule } from '../../base/base.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const routes: Routes = [
  { path: '', component: fromContainers.ImportComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [],
})
export class ImportModule {}
