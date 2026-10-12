import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of vehicle used.
 *
 * * `BUS` - Bus.
 * * `CABLE_CAR` - A vehicle that operates on a cable, usually on the ground. Aerial cable cars may
 *   be of the type GONDOLA_LIFT.
 * * `COMMUTER_TRAIN` - Commuter rail.
 * * `FERRY` - Ferry.
 * * `FUNICULAR` - A vehicle that is pulled up a steep incline by a cable. A Funicular typically
 *   consists of two cars, with each car acting as a counterweight for the other.
 * * `GONDOLA_LIFT` - An aerial cable car.
 * * `HEAVY_RAIL` - Heavy rail.
 * * `HIGH_SPEED_TRAIN` - High speed train.
 * * `INTERCITY_BUS` - Intercity bus.
 * * `LONG_DISTANCE_TRAIN` - Long distance train.
 * * `METRO_RAIL` - Light rail transit.
 * * `MONORAIL` - Monorail.
 * * `OTHER` - All other vehicles will return this type.
 * * `RAIL` - Rail.
 * * `SHARE_TAXI` - Share taxi is a kind of bus with the ability to drop off and pick up passengers
 *   anywhere on its route.
 * * `SUBWAY` - Underground light rail.
 * * `TRAM` - Above ground light rail.
 * * `TROLLEYBUS` - Trolleybus.
 */
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
