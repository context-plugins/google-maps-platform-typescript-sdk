import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DepartureTime = {
  /** The time specified as a string in the time zone. */
  text: string;
  /** The time specified as Unix time, or seconds since midnight, January 1, 1970 UTC. */
  value: number;
  /**
   * Contains the time zone. The value is the name of the time zone as defined in the [IANA Time
   * Zone Database](http://www.iana.org/time-zones), e.g. "America/New_York".
   */
  timeZone: string;
};

export const departureTimeSchema: Schema<DepartureTime> = s.object<DepartureTime>({
  text: s.string(),
  value: s.float64(),
  timeZone: s.string(),
  _keysMap: {
    timeZone: "time_zone",
  },
});
