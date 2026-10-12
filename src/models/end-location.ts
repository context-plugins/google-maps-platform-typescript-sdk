import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EndLocation = {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
};

export const endLocationSchema: Schema<EndLocation> = s.object<EndLocation>({
  lat: s.float64(),
  lng: s.float64(),
});
