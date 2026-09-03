import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";
import { viewportSchema, type Viewport } from "./viewport.js";

export type Geometry2 = {
  location: Location;
  viewport: Viewport;
};

export const geometry2Schema: Schema<Geometry2> = s.object<Geometry2>({
  location: locationSchema,
  viewport: viewportSchema,
});
