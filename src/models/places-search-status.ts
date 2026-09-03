import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlacesSearchStatus = {
  Ok: "OK",
  ZeroResults: "ZERO_RESULTS",
  InvalidRequest: "INVALID_REQUEST",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type PlacesSearchStatus = (typeof PlacesSearchStatus)[keyof typeof PlacesSearchStatus] | (string & {});

export const placesSearchStatusSchema: EnumSchema<PlacesSearchStatus> =
  s.enumOf<PlacesSearchStatus>(PlacesSearchStatus);
