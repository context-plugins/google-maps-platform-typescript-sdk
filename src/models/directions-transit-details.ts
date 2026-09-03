import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { arrivalTimeSchema, type ArrivalTime } from "./arrival-time.js";
import { departureTimeSchema, type DepartureTime } from "./departure-time.js";
import { directionsTransitLineSchema, type DirectionsTransitLine } from "./directions-transit-line.js";
import { directionsTransitStopSchema, type DirectionsTransitStop } from "./directions-transit-stop.js";

export type DirectionsTransitDetails = {
  arrivalStop?: DirectionsTransitStop;
  arrivalTime?: ArrivalTime;
  departureStop?: DirectionsTransitStop;
  departureTime?: DepartureTime;
  headsign?: string;
  headway?: number;
  line?: DirectionsTransitLine;
  numStops?: number;
  tripShortName?: string;
};

export const directionsTransitDetailsSchema: Schema<DirectionsTransitDetails> =
  s.object<DirectionsTransitDetails>({
    arrivalStop: s.optional(s.lazy(() => directionsTransitStopSchema)),
    arrivalTime: s.optional(s.lazy(() => arrivalTimeSchema)),
    departureStop: s.optional(s.lazy(() => directionsTransitStopSchema)),
    departureTime: s.optional(s.lazy(() => departureTimeSchema)),
    headsign: s.optional(s.string()),
    headway: s.optional(s.number()),
    line: s.optional(s.lazy(() => directionsTransitLineSchema)),
    numStops: s.optional(s.number()),
    tripShortName: s.optional(s.string()),
    _keysMap: {
      arrivalStop: "arrival_stop",
      arrivalTime: "arrival_time",
      departureStop: "departure_stop",
      departureTime: "departure_time",
      numStops: "num_stops",
      tripShortName: "trip_short_name",
    },
  });
