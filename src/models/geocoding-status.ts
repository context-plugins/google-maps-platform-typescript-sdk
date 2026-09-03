import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GeocodingStatus = {
  Ok: "OK",
  InvalidRequest: "INVALID_REQUEST",
  OverDailyLimit: "OVER_DAILY_LIMIT",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
  ZeroResults: "ZERO_RESULTS",
} as const;
export type GeocodingStatus = (typeof GeocodingStatus)[keyof typeof GeocodingStatus] | (string & {});

export const geocodingStatusSchema: EnumSchema<GeocodingStatus> = s.enumOf<GeocodingStatus>(GeocodingStatus);
