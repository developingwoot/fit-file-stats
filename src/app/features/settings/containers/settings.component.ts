import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LengthUnit,
  SpeedUnit,
  TempertureUnit,
  WeightUnit,
} from '../../../base/models/settings';
import { StoreType } from '../../../base/models/store-type';

@Component({
  template: `
    <form class="margin-1" [formGroup]="form">
      <h2>Settings</h2>
      <mat-grid-list cols="2" rowHeight="60px">
        <mat-grid-tile [colspan]="2" [rowspan]="1">
          <mat-form-field appearance="fill">
            <mat-label>Unit</mat-label>
            <mat-select
              (selectionChange)="onSelect($event.value)"
              formControlName="unit"
            >
              <mat-option value="metric">Metric</mat-option>
              <mat-option value="imperial">Imperial</mat-option>
            </mat-select>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="2" [rowspan]="1">
          <mat-form-field appearance="fill">
            <mat-label>Date of Birth</mat-label>
            <input matInput [matDatepicker]="picker" formControlName="dob" />
            <mat-datepicker-toggle
              matSuffix
              [for]="picker"
            ></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="2" [rowspan]="1">
          <mat-form-field appearance="fill">
            <mat-label>Weight</mat-label>
            <input matInput type="number" formControlName="weight" />
            <span matSuffix>{{ getSuffix() }}</span>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2" rowspan="1">
          <button mat-raised-button color="primary" (click)="onSave()">
            Save
          </button>
        </mat-grid-tile>
      </mat-grid-list>
    </form>
  `,
})
export class SettingsComponent {
  form: FormGroup = this.fb.group({
    dob: [null, Validators.required],
    weight: [0, [Validators.min(1), Validators.max(1000)]],
    weightUnit: [WeightUnit.pound],
    lengthUnit: [LengthUnit.miles],
    speedUnit: [SpeedUnit.MilesPerHour],
    tempertureUnit: [TempertureUnit.Fahrenheit],
    storeType: [StoreType.Settings],
    unit: ['imperial'],
  });

  constructor(private fb: FormBuilder) {}

  onSave() {
    const { value } = this.form;
    console.log(value);
  }

  onSelect(value: any) {
    if (value === 'imperial') {
      this.form.controls['weightUnit'].setValue(WeightUnit.pound);
      this.form.controls['lengthUnit'].setValue(LengthUnit.miles);
      this.form.controls['speedUnit'].setValue(SpeedUnit.MilesPerHour);
      this.form.controls['tempertureUnit'].setValue(TempertureUnit.Fahrenheit);
    }

    if (value === 'metric') {
      this.form.controls['weightUnit'].setValue(WeightUnit.kilogram);
      this.form.controls['lengthUnit'].setValue(LengthUnit.kilometer);
      this.form.controls['speedUnit'].setValue(SpeedUnit.KilometersPerHour);
      this.form.controls['tempertureUnit'].setValue(TempertureUnit.Celsius);
    }
  }

  getSuffix() {
    return this.form.value.weightUnit;
  }
}
