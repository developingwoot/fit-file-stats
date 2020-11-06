import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ChartData } from '../../../base/models/chart-data';
import { MiniCard } from '../../../base/models/mini-card';
import { Activity } from '../../../base/models/fit-data';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-ride-analysis [activity]="activities[0]"></app-ride-analysis>
  `,
})
export class DashaboardComponent {
  @Input() activities: Activity[];

  data: ChartData[];
  miniCards: Partial<MiniCard>[];

  constructor() {}
}
