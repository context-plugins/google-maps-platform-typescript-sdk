import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object describing a specific location with Latitude and Longitude in decimal degrees. */
export type LatitudeLongitudeLiteral = {
  /** Latitude in decimal degrees */
  latitude: number;
  /** Longitude in decimal degrees */
  longitude: number;
};

export const latitudeLongitudeLiteralSchema: Schema<LatitudeLongitudeLiteral> =
  s.object<LatitudeLongitudeLiteral>({
    latitude: s.float64(),
    longitude: s.float64(),
  });
