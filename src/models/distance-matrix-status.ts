import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DistanceMatrixStatus = {
  Ok: "OK",
  InvalidRequest: "INVALID_REQUEST",
  MaxElementsExceeded: "MAX_ELEMENTS_EXCEEDED",
  MaxDimensionsExceeded: "MAX_DIMENSIONS_EXCEEDED",
  OverDailyLimit: "OVER_DAILY_LIMIT",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type DistanceMatrixStatus =
  | (typeof DistanceMatrixStatus)[keyof typeof DistanceMatrixStatus]
  | (string & {});

export const distanceMatrixStatusSchema: EnumSchema<DistanceMatrixStatus> =
  s.enumOf<DistanceMatrixStatus>(DistanceMatrixStatus);
