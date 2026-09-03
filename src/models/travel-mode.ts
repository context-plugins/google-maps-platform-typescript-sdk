import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TravelMode = {
  Driving: "DRIVING",
  Bicycling: "BICYCLING",
  Transit: "TRANSIT",
  Walking: "WALKING",
} as const;
export type TravelMode = (typeof TravelMode)[keyof typeof TravelMode] | (string & {});

export const travelModeSchema: EnumSchema<TravelMode> = s.enumOf<TravelMode>(TravelMode);
