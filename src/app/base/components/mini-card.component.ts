import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  template: `
    <mat-card class="dashboard-card">
      <mat-card-header class="card-header">
        <mat-card-title>
          <h1 class="value-text" *ngIf="isCurrency">
            {{ value | currency: '$':'symbol':'0.0' }}
          </h1>
          <h1 class="value-text" *ngIf="!isCurrency">{{ value }}</h1>
        </mat-card-title>
        <div mat-card-avatar class="card-icon">
          <mat-icon [color]="color" class="avatar-icon">{{ icon }}</mat-icon>
        </div>
      </mat-card-header>
      <h3 class="title-text">{{ title }}</h3>
      <p class="difference-text" *ngIf="percentValue">
        <span [ngClass]="{ 'green-text': isIncrease, 'red-text': !isIncrease }"
          >{{ isIncrease ? '+' : '-' }}{{ percentValue | percent: '2.1-2' }}
          <mat-icon *ngIf="isIncrease">arrow_upward</mat-icon>
          <mat-icon *ngIf="!isIncrease">arrow_downward</mat-icon>
        </span>
        <span class="duration">{{ duration }}</span>
      </p>
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
        display: flex;
        flex-direction: column;
      }

      .value-text {
        margin: 0;
      }

      .title-text {
        font-weight: 400;
        margin: 0;
        text-align: center;
        color: grey;
      }

      .avatar-icon {
        margin: 15px;
        transform: scale(2);
      }

      .duration {
        color: grey;
      }

      .difference-text {
        text-align: center;
        margin-top: 10px;
      }

      .card-icon {
        margin-right: 15px;
      }

      .card-header {
        justify-content: center;
      }

      .green-text {
        color: green;
      }

      .red-text {
        color: red;
      }
    `,
  ],
})
export class MiniCardComponent implements OnChanges {
  @Input() icon: string;
  @Input() title: string;
  @Input() value: number;
  @Input() color: string;
  @Input() isIncrease: boolean;
  @Input() isCurrency: boolean;
  @Input() duration: string;
  @Input() percentValue: number;

  constructor() {}

  ngOnChanges() {
    // console.log(
    //   this.title,
    //   this.isIncrease,
    //   this.duration,
    //   this.icon,
    //   this.color
    // );
  }
}
