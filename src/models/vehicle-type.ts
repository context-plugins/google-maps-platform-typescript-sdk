import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VehicleType = {
  Bus: "BUS",
  CableCar: "CABLE_CAR",
  CommuterTrain: "COMMUTER_TRAIN",
  Ferry: "FERRY",
  Funicular: "FUNICULAR",
  GondolaLift: "GONDOLA_LIFT",
  HeavyRail: "HEAVY_RAIL",
  HighSpeedTrain: "HIGH_SPEED_TRAIN",
  IntercityBus: "INTERCITY_BUS",
  LongDistanceTrain: "LONG_DISTANCE_TRAIN",
  MetroRail: "METRO_RAIL",
  Monorail: "MONORAIL",
  Other: "OTHER",
  Rail: "RAIL",
  ShareTaxi: "SHARE_TAXI",
  Subway: "SUBWAY",
  Tram: "TRAM",
  Trolleybus: "TROLLEYBUS",
} as const;
export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType] | (string & {});

export const vehicleTypeSchema: EnumSchema<VehicleType> = s.enumOf<VehicleType>(VehicleType);
