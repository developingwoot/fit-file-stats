import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  template: `
    <mat-card class="dashboard-card">
      <mat-card-header>
        <mat-card-title>
          {{ title }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content class="dashboard-card-content">
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }

      .dashboard-card-content {
        text-align: center;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 100%;
        justify-content: center;
        align-items: stretch;
      }

      mat-card {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class ChartCardComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
