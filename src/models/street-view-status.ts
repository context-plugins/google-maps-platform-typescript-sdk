import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StreetViewStatus = {
  Ok: "OK",
  InvalidRequest: "INVALID_REQUEST",
  NotFound: "NOT_FOUND",
  ZeroResults: "ZERO_RESULTS",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type StreetViewStatus = (typeof StreetViewStatus)[keyof typeof StreetViewStatus] | (string & {});

export const streetViewStatusSchema: EnumSchema<StreetViewStatus> =
  s.enumOf<StreetViewStatus>(StreetViewStatus);
