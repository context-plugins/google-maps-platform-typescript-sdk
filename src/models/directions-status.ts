import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DirectionsStatus = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  ZeroResults: "ZERO_RESULTS",
  MaxWaypointsExceeded: "MAX_WAYPOINTS_EXCEEDED",
  MaxRouteLengthExceeded: "MAX_ROUTE_LENGTH_EXCEEDED",
  InvalidRequest: "INVALID_REQUEST",
  OverDailyLimit: "OVER_DAILY_LIMIT",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type DirectionsStatus = (typeof DirectionsStatus)[keyof typeof DirectionsStatus] | (string & {});

export const directionsStatusSchema: EnumSchema<DirectionsStatus> =
  s.enumOf<DirectionsStatus>(DirectionsStatus);
