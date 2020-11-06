import { NgModule } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from './material.module';

import * as fromComponents from './components';

@NgModule({
  imports: [NgxChartsModule, MaterialModule],
  exports: [...fromComponents.components, NgxChartsModule],
  declarations: [...fromComponents.components],
  providers: [],
})
export class BaseModule {}
