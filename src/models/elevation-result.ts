import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type ElevationResult = {
  /** The elevation of the location in meters. */
  elevation: number;
  /**
   * The value indicating the maximum distance between data points from which the elevation was
   * interpolated, in meters. This property will be missing if the resolution is not known. Note
   * that elevation data becomes more coarse (larger resolution values) when multiple points are
   * passed. To obtain the most accurate elevation value for a point, it should be queried
   * independently.
   */
  resolution?: number;
  location: Location;
};

export const elevationResultSchema: Schema<ElevationResult> = s.object<ElevationResult>({
  elevation: s.float64(),
  resolution: s.optional(s.float64()),
  location: locationSchema,
});
