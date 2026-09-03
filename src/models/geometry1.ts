import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bounds1Schema, type Bounds1 } from "./bounds1.js";
import { locationSchema, type Location } from "./location.js";
import { viewportSchema, type Viewport } from "./viewport.js";

export type Geometry1 = {
  location: Location;
  bounds?: Bounds1;
  viewport: Viewport;
};

export const geometry1Schema: Schema<Geometry1> = s.object<Geometry1>({
  location: locationSchema,
  bounds: s.optional(s.lazy(() => bounds1Schema)),
  viewport: viewportSchema,
});
