import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * - `DRIVING` (default) indicates calculation using the road network.
 * - `BICYCLING` requests calculation for bicycling via bicycle paths & preferred streets (where
 *   available).
 * - `TRANSIT` requests calculation via public transit routes (where available).
 * - `WALKING` requests calculation for walking via pedestrian paths & sidewalks (where available).
 */
export const TravelMode = {
  Driving: "DRIVING",
  Bicycling: "BICYCLING",
  Transit: "TRANSIT",
  Walking: "WALKING",
} as const;
export type TravelMode = (typeof TravelMode)[keyof typeof TravelMode] | (string & {});

export const travelModeSchema: EnumSchema<TravelMode> = s.enumOf<TravelMode>(TravelMode);
