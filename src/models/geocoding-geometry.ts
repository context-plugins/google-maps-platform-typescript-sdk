import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bounds1Schema, type Bounds1 } from "./bounds1.js";
import { locationSchema, type Location } from "./location.js";
import { viewportSchema, type Viewport } from "./viewport.js";

/** An object describing the location. */
export type GeocodingGeometry = {
  location: Location;
  bounds?: Bounds1;
  viewport: Viewport;
};

export const geocodingGeometrySchema: Schema<GeocodingGeometry> = s.object<GeocodingGeometry>({
  location: locationSchema,
  bounds: s.optional(s.lazy(() => bounds1Schema)),
  viewport: viewportSchema,
});
