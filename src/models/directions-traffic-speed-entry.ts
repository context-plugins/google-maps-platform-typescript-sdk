import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectionsTrafficSpeedEntry = {
  /** The current traffic/speed conditions on this portion of a path. */
  speedCategory: string;
  /** The offset along the path (in meters) up to which this speed category is valid. */
  offsetMeters: number;
};

export const directionsTrafficSpeedEntrySchema: Schema<DirectionsTrafficSpeedEntry> =
  s.object<DirectionsTrafficSpeedEntry>({
    speedCategory: s.string(),
    offsetMeters: s.float64(),
    _keysMap: {
      speedCategory: "speed_category",
      offsetMeters: "offset_meters",
    },
  });
