import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  template: `
    <ngx-charts-line-chart
      [view]="view"
      [scheme]="colorScheme"
      [legend]="legend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxis]="xAxis"
      [yAxis]="yAxis"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [timeline]="timeline"
      [results]="data"
      (select)="onSelect($event)"
      (activate)="onActivate($event)"
      (deactivate)="onDeactivate($event)"
    >
    </ngx-charts-line-chart>
  `,
})
export class LineChartComponent implements OnChanges {
  @Input() data: any[];
  @Input() xAxisLabel: string = 'X';
  @Input() yAxisLabel: string = 'Y';

  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  isDataSet = false;

  constructor(private cd: ChangeDetectorRef) {
    Object.assign(this, { ...this.data });
  }

  ngOnChanges() {
    if (!this.isDataSet && this.data) {
      this.isDataSet = true;
      Object.assign(this, { ...this.data });
      console.log('line chart', this.data);
      this.cd.markForCheck();
    }
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
