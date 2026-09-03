import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ElevationStatus = {
  Ok: "OK",
  DataNotAvailable: "DATA_NOT_AVAILABLE",
  InvalidRequest: "INVALID_REQUEST",
  OverDailyLimit: "OVER_DAILY_LIMIT",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type ElevationStatus = (typeof ElevationStatus)[keyof typeof ElevationStatus] | (string & {});

export const elevationStatusSchema: EnumSchema<ElevationStatus> = s.enumOf<ElevationStatus>(ElevationStatus);
