import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type DirectionsViaWaypoint = {
  location?: Location;
  /** The index of the step containing the waypoint. */
  stepIndex?: number;
  /** The position of the waypoint along the step's polyline, expressed as a ratio from 0 to 1. */
  stepInterpolation?: number;
};

export const directionsViaWaypointSchema: Schema<DirectionsViaWaypoint> = s.object<DirectionsViaWaypoint>({
  location: s.optional(s.lazy(() => locationSchema)),
  stepIndex: s.optional(s.int()),
  stepInterpolation: s.optional(s.float64()),
  _keysMap: {
    stepIndex: "step_index",
    stepInterpolation: "step_interpolation",
  },
});
