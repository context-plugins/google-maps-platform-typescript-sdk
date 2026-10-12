import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { arrivalTimeSchema, type ArrivalTime } from "./arrival-time.js";
import { departureTimeSchema, type DepartureTime } from "./departure-time.js";
import { directionsStepSchema, type DirectionsStep } from "./directions-step.js";
import {
  directionsTrafficSpeedEntrySchema,
  type DirectionsTrafficSpeedEntry,
} from "./directions-traffic-speed-entry.js";
import { directionsViaWaypointSchema, type DirectionsViaWaypoint } from "./directions-via-waypoint.js";
import { distanceSchema, type Distance } from "./distance.js";
import { durationInTrafficSchema, type DurationInTraffic } from "./duration-in-traffic.js";
import { durationSchema, type Duration } from "./duration.js";
import { endLocationSchema, type EndLocation } from "./end-location.js";
import { startLocationSchema, type StartLocation } from "./start-location.js";

export type DirectionsLeg = {
  arrivalTime?: ArrivalTime;
  departureTime?: DepartureTime;
  distance?: Distance;
  duration?: Duration;
  durationInTraffic?: DurationInTraffic;
  /**
   * Contains the human-readable address (typically a street address) from reverse geocoding the
   * `end_location` of this leg. This content is meant to be read as-is. Do not programmatically
   * parse the formatted address.
   */
  endAddress: string;
  endLocation: EndLocation;
  /**
   * Contains the human-readable address (typically a street address) resulting from reverse
   * geocoding the `start_location` of this leg. This content is meant to be read as-is. Do not
   * programmatically parse the formatted address.
   */
  startAddress: string;
  startLocation: StartLocation;
  /** An array of steps denoting information about each separate step of the leg of the journey. */
  steps: DirectionsStep[];
  /**
   * Information about traffic speed along the leg.
   *
   * @deprecated
   */
  trafficSpeedEntry: DirectionsTrafficSpeedEntry[];
  /** The locations of via waypoints along this leg. */
  viaWaypoint: DirectionsViaWaypoint[];
};

export const directionsLegSchema: Schema<DirectionsLeg> = s.object<DirectionsLeg>({
  arrivalTime: s.optional(s.lazy(() => arrivalTimeSchema)),
  departureTime: s.optional(s.lazy(() => departureTimeSchema)),
  distance: s.optional(s.lazy(() => distanceSchema)),
  duration: s.optional(s.lazy(() => durationSchema)),
  durationInTraffic: s.optional(s.lazy(() => durationInTrafficSchema)),
  endAddress: s.string(),
  endLocation: endLocationSchema,
  startAddress: s.string(),
  startLocation: startLocationSchema,
  steps: s.array(s.lazy(() => directionsStepSchema)),
  trafficSpeedEntry: s.array(s.lazy(() => directionsTrafficSpeedEntrySchema)),
  viaWaypoint: s.array(s.lazy(() => directionsViaWaypointSchema)),
  _keysMap: {
    arrivalTime: "arrival_time",
    departureTime: "departure_time",
    durationInTraffic: "duration_in_traffic",
    endAddress: "end_address",
    endLocation: "end_location",
    startAddress: "start_address",
    startLocation: "start_location",
    trafficSpeedEntry: "traffic_speed_entry",
    viaWaypoint: "via_waypoint",
  },
});
