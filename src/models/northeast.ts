import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Northeast = {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
};

export const northeastSchema: Schema<Northeast> = s.object<Northeast>({
  lat: s.float64(),
  lng: s.float64(),
});
