import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type Result = {
  elevation?: number;
  resolution?: number;
  location?: Location;
};

export const resultSchema: Schema<Result> = s.object<Result>({
  elevation: s.optional(s.float64()),
  resolution: s.optional(s.float64()),
  location: s.optional(s.lazy(() => locationSchema)),
});
