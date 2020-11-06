import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { ChartData } from '../models/chart-data';
import { Activity } from '../models/fit-data';
import { MiniCard } from '../models/mini-card';

@Component({
  selector: 'app-ride-analysis',
  template: `
    <div class="grid-container">
      <h1 class="mat-h1">Ride Analysis</h1>
      <mat-grid-list cols="{{ (cards | async)?.columns }}" rowHeight="200px">
        <mat-grid-tile
          *ngFor="let mc of miniCards"
          [colspan]="(cards | async)?.miniCard.cols"
          [rowspan]="(cards | async)?.miniCard.rows"
        >
          <app-mini-card
            [title]="mc.title"
            [value]="mc.value"
            [color]="mc.color"
            [icon]="mc.icon"
            [duration]="mc.duration"
            [isIncrease]="mc.isIncrease"
            [isCurrency]="mc.isCurrency"
            [percentValue]="mc.percentValue"
          ></app-mini-card>
        </mat-grid-tile>
        <!--Charts-->
        <mat-grid-tile
          *ngFor="let i of [9]"
          [colspan]="(cards | async)?.chart.cols"
          [rowspan]="(cards | async)?.chart.rows"
        >
          <app-chart-card title="Timeline" *ngIf="chartData">
            <app-line-chart
              [data]="chartData"
              xAxisLabel="Time"
              yAxisLabel="Value"
            ></app-line-chart>
          </app-chart-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    `
      .grid-container {
        margin: 20px;
      }

      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }

      .more-button {
        position: absolute;
        top: 5px;
        right: 10px;
      }

      .dashboard-card-content {
        text-align: center;
      }
    `,
  ],
})
export class RideAnalysisComponent {
  @Input() activity: Activity;

  hasData = false;
  isDataPopulated = false;
  miniCards: Partial<MiniCard>[];
  chartData: ChartData[];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 },
        };
      }

      return {
        columns: 3,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 3, rows: 3 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnChanges() {
    if (this.activity && !this.isDataPopulated) {
      this.hasData = true;
      this.isDataPopulated = true;
      this.chartData = this.getChartData();
      this.miniCards = this.getMiniCardData();
      console.log(this.activity);
    }
  }

  _toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  };

  getMiniCardData(): Partial<MiniCard>[] {
    const data: Partial<MiniCard>[] = [
      {
        title: 'Time',
        value: this._toHHMMSS(this.activity.sessions[0].total_elapsed_time),
        icon: 'timer',
      },
      {
        title: 'Distance',
        value: this.activity.sessions[0].total_distance.toFixed(),
        icon: 'directions_bike',
      },
      {
        title: 'Power Avg',
        value: this.activity.sessions[0].avg_power,
        icon: 'flash_on',
        color: 'accent',
      },
      {
        title: 'Power Max',
        value: this.activity.sessions[0].max_power,
        color: 'accent',
        icon: 'flash_on',
      },
      {
        title: 'Heart Rate Avg',
        value: this.activity.sessions[0].avg_heart_rate,
        color: 'warn',
        icon: 'favorite',
      },
      {
        title: 'Heart Rate Max',
        value: this.activity.sessions[0].max_heart_rate,
        duration: '500',
        color: 'warn',
        icon: 'favorite',
      },
      {
        title: 'Speed Avg',
        value: this.activity.sessions[0].avg_speed.toFixed(),
        icon: 'speed',
        color: 'primary',
      },
      {
        title: 'Speed Max',
        value: this.activity.sessions[0].max_speed.toFixed(),
        duration: 'since last week',
        isIncrease: true,
        percentValue: 0.002,
        icon: 'speed',
        color: 'primary',
      },
      {
        title: 'Cadence Avg',
        value: this.activity.sessions[0].avg_cadence,
        duration: '500',
        icon: 'repeat',
      },
      {
        title: 'Cadence Max',
        value: this.activity.sessions[0].max_cadence,
        duration: '500',
        icon: 'repeat',
      },
    ];

    return data;
  }

  getChartData(): any[] {
    const data = [
      {
        name: 'Power',
        series: [
          ...this.activity.sessions[0].laps[0].records.map((r) => ({
            name: r.timestamp,
            value: r.power,
          })),
        ],
      },
      {
        name: 'Heart Rate',
        series: [
          ...this.activity.sessions[0].laps[0].records.map((r) => ({
            name: r.timestamp,
            value: r.heart_rate,
          })),
        ],
      },
      {
        name: 'Cadence',
        series: [
          ...this.activity.sessions[0].laps[0].records.map((r) => ({
            name: r.timestamp,
            value: r.cadence,
          })),
        ],
      },
    ];
    return data;
  }
}
