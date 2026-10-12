import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location6 = {
  /** Latitude in decimal degrees */
  latitude: number;
  /** Longitude in decimal degrees */
  longitude: number;
};

export const location6Schema: Schema<Location6> = s.object<Location6>({
  latitude: s.float64(),
  longitude: s.float64(),
});
