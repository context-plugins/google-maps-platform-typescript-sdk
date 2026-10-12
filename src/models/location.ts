import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location = {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  lat: s.float64(),
  lng: s.float64(),
});
