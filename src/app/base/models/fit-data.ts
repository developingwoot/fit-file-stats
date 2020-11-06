import { StoreType } from './store-type';

export class FitData {
  protocolVersion: number;
  profileVersion: number;
  activity: Activity;
}

export class Activity {
  _id: string;
  timestamp: Date;
  total_timer_time: number;
  local_timestamp: Date;
  num_sessions: number;
  type: string;
  event: string;
  event_type: string;
  event_group: number;

  sessions: Session[];
  events: Event[];
  hrv: [];
  device_infos: DeviceInfo[];
  developer_data_ids: [];
  field_descriptions: [];
  sports: [];
  storeType: StoreType = StoreType.Activity;
}

export class Event {
  timestamp: Date;
  data: number;
  data16: number;
  event: string;
  event_type: string;
  event_group: number;
}

export class DeviceInfo {
  timestamp: Date;
  serial_number: number;
  cum_operating_time: number;
  manufacturer: string;
  product: number;
  software_version: number;
  battery_voltage: number;
  device_index: number;
  device_type: number;
  hardware_version: number;
  battery_status: number;
}

export class Session {
  timestamp: Date;
  start_time: Date;
  start_position_lat: number;
  start_position_long: number;
  total_elapsed_time: number;
  total_timer_time: number;
  total_distance: number;
  total_cycles: number;
  nec_lat: number;
  nec_long: number;
  swc_lat: number;
  swc_long: number;
  message_index: MessageIndex;
  total_calories: number;
  total_fat_calories: number;
  avg_speed: number;
  max_speed: number;
  avg_power: number;
  max_power: number;
  total_ascent: number;
  total_decent: number;
  first_lap_index: number;
  num_laps: number;
  event: string;
  event_type: string;
  sport: string;
  sub_sport: string;
  avg_heart_rate: number;
  max_heart_rate: number;
  avg_cadence: number;
  max_cadence: number;
  total_training_effect: number;
  event_group: number;
  trigger: string;
  laps: Lap[];
}

export class Lap {
  timestamp: Date;
  start_time: Date;
  start_position_lat: number;
  start_position_long: number;
  end_position_lat: number;
  end_position_long: number;
  total_elapsed_time: number;
  total_timer_time: number;
  total_distance: number;
  total_cycles: number;
  message_index: MessageIndex;
  total_calories: number;
  total_fat_calories: number;
  avg_speed: number;
  max_speed: number;
  avg_power: number;
  max_power: number;
  total_ascent: number;
  total_decent: number;
  event: string;
  event_type: string;
  avg_heart_rate: number;
  max_heart_rate: number;
  avg_cadence: number;
  max_cadence: number;
  intensity: string;
  lap_trigger: string;
  sport: string;
  event_group: number;
  records: Record[];
}

export class MessageIndex {
  0: boolean;
  value: number;
  reserved: boolean;
  selected: boolean;
}

export class Record {
  timestamp: Date;
  elapsed_time: number;
  timer_time: number;
  position_lat: number;
  position_long: number;
  distance: number;
  heart_rate: number;
  altitude: number;
  speed: number;
  power: number;
  cadence: number;
}
