import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LocationType = {
  Approximate: "APPROXIMATE",
  GeometricCenter: "GEOMETRIC_CENTER",
  RangeInterpolated: "RANGE_INTERPOLATED",
  Rooftop: "ROOFTOP",
} as const;
export type LocationType = (typeof LocationType)[keyof typeof LocationType] | (string & {});

export const locationTypeSchema: EnumSchema<LocationType> = s.enumOf<LocationType>(LocationType);
