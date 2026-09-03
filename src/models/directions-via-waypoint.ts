import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type DirectionsViaWaypoint = {
  location?: Location;
  stepIndex?: number;
  stepInterpolation?: number;
};

export const directionsViaWaypointSchema: Schema<DirectionsViaWaypoint> = s.object<DirectionsViaWaypoint>({
  location: s.optional(s.lazy(() => locationSchema)),
  stepIndex: s.optional(s.number()),
  stepInterpolation: s.optional(s.number()),
  _keysMap: {
    stepIndex: "step_index",
    stepInterpolation: "step_interpolation",
  },
});
