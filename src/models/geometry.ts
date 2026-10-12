import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";
import { viewportSchema, type Viewport } from "./viewport.js";

/** An object describing the location. */
export type Geometry = {
  location: Location;
  viewport: Viewport;
};

export const geometrySchema: Schema<Geometry> = s.object<Geometry>({
  location: locationSchema,
  viewport: viewportSchema,
});
