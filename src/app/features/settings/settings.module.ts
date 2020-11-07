import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BaseModule } from '../../base/base.module';
import { MaterialModule } from '../../base/material.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.SettingsComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [],
})
export class SettingsModule {}
