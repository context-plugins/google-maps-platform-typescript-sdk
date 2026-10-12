import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartLocation = {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
};

export const startLocationSchema: Schema<StartLocation> = s.object<StartLocation>({
  lat: s.float64(),
  lng: s.float64(),
});
