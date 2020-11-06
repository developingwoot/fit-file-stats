import { StoreType } from './store-type';

export class Setting {
  _id: string;
  dob: Date;
  weight: number;
  weightUnit: WeightUnit;
  lengthUnit: LengthUnit;
  speedUnit: SpeedUnit;
  tempertureUnit: TempertureUnit;
  storeType: StoreType = StoreType.Settings;
}

export enum WeightUnit {
  kilogram = 'kg',
  pound = 'lbs',
}

export enum LengthUnit {
  miles = 'mi',
  meter = 'm',
  kilometer = 'km',
}

export enum SpeedUnit {
  MetersPerSecond = 'm/s',
  KilometersPerHour = 'km/h',
  MilesPerHour = 'mph',
}

export enum TempertureUnit {
  Celsius = 'celsius',
  Kelvin = 'kelvin',
  Fahrenheit = 'fahrenheit',
}
