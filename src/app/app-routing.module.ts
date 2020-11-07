import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromResolvers from './base/resolvers';

const routes: Routes = [
  {
    path: 'import',
    loadChildren: () =>
      import('./features/importing/import.module').then((m) => m.ImportModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    resolve: [fromResolvers.SettingsResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
