import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlacesDetailsStatus = {
  Ok: "OK",
  ZeroResults: "ZERO_RESULTS",
  InvalidRequest: "INVALID_REQUEST",
  NotFound: "NOT_FOUND",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type PlacesDetailsStatus =
  | (typeof PlacesDetailsStatus)[keyof typeof PlacesDetailsStatus]
  | (string & {});

export const placesDetailsStatusSchema: EnumSchema<PlacesDetailsStatus> =
  s.enumOf<PlacesDetailsStatus>(PlacesDetailsStatus);
