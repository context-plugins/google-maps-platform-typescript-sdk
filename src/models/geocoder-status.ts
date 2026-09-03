import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GeocoderStatus = {
  Ok: "OK",
  ZeroResults: "ZERO_RESULTS",
} as const;
export type GeocoderStatus = (typeof GeocoderStatus)[keyof typeof GeocoderStatus] | (string & {});

export const geocoderStatusSchema: EnumSchema<GeocoderStatus> = s.enumOf<GeocoderStatus>(GeocoderStatus);
