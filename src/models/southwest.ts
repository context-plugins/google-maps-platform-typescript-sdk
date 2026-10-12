import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Southwest = {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
};

export const southwestSchema: Schema<Southwest> = s.object<Southwest>({
  lat: s.float64(),
  lng: s.float64(),
});
