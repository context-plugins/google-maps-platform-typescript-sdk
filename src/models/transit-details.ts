import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { arrivalTimeSchema, type ArrivalTime } from "./arrival-time.js";
import { departureTimeSchema, type DepartureTime } from "./departure-time.js";
import { directionsTransitLineSchema, type DirectionsTransitLine } from "./directions-transit-line.js";
import { directionsTransitStopSchema, type DirectionsTransitStop } from "./directions-transit-stop.js";

export type TransitDetails = {
  arrivalStop?: DirectionsTransitStop;
  arrivalTime?: ArrivalTime;
  departureStop?: DirectionsTransitStop;
  departureTime?: DepartureTime;
  /**
   * Specifies the direction in which to travel on this line, as it is marked on the vehicle or at
   * the departure stop. This will often be the terminus station.
   */
  headsign?: string;
  /**
   * Specifies the expected number of seconds between departures from the same stop at this time.
   * For example, with a `headway` value of 600, you would expect a ten minute wait if you should
   * miss your bus.
   */
  headway?: number;
  line?: DirectionsTransitLine;
  /**
   * The number of stops from the departure to the arrival stop. This includes the arrival stop, but
   * not the departure stop. For example, if your directions involve leaving from Stop A, passing
   * through stops B and C, and arriving at stop D, `num_stops` will return 3.
   */
  numStops?: number;
  /**
   * The text that appears in schedules and sign boards to identify a transit trip to passengers.
   * The text should uniquely identify a trip within a service day. For example, "538" is the
   * `trip_short_name` of the Amtrak train that leaves San Jose, CA at 15:10 on weekdays to
   * Sacramento, CA.
   */
  tripShortName?: string;
};

export const transitDetailsSchema: Schema<TransitDetails> = s.object<TransitDetails>({
  arrivalStop: s.optional(s.lazy(() => directionsTransitStopSchema)),
  arrivalTime: s.optional(s.lazy(() => arrivalTimeSchema)),
  departureStop: s.optional(s.lazy(() => directionsTransitStopSchema)),
  departureTime: s.optional(s.lazy(() => departureTimeSchema)),
  headsign: s.optional(s.string()),
  headway: s.optional(s.int()),
  line: s.optional(s.lazy(() => directionsTransitLineSchema)),
  numStops: s.optional(s.int()),
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
