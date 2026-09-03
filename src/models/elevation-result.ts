import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type ElevationResult = {
  elevation: number;
  resolution?: number;
  location: Location;
};

export const elevationResultSchema: Schema<ElevationResult> = s.object<ElevationResult>({
  elevation: s.number(),
  resolution: s.optional(s.number()),
  location: locationSchema,
});
