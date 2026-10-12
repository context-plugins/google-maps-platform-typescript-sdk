import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object describing a specific location with Latitude and Longitude in decimal degrees. */
export type LatLngLiteral = {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
};

export const latLngLiteralSchema: Schema<LatLngLiteral> = s.object<LatLngLiteral>({
  lat: s.float64(),
  lng: s.float64(),
});
