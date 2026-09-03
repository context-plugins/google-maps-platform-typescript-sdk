import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectionsTrafficSpeedEntry = {
  speedCategory: string;
  offsetMeters: number;
};

export const directionsTrafficSpeedEntrySchema: Schema<DirectionsTrafficSpeedEntry> =
  s.object<DirectionsTrafficSpeedEntry>({
    speedCategory: s.string(),
    offsetMeters: s.number(),
    _keysMap: {
      speedCategory: "speed_category",
      offsetMeters: "offset_meters",
    },
  });
