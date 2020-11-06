import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './base/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BaseModule } from './base/base.module';

import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { effects } from './store/effects';

import { NavSideComponent } from './nav-side/nav-side.component';

@NgModule({
  declarations: [AppComponent, NavSideComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BaseModule,
    BrowserAnimationsModule,
    LayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
