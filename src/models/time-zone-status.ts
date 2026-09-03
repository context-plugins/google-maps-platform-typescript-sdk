import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimeZoneStatus = {
  Ok: "OK",
  InvalidRequest: "INVALID_REQUEST",
  OverDailyLimit: "OVER_DAILY_LIMIT",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
  ZeroResults: "ZERO_RESULTS",
} as const;
export type TimeZoneStatus = (typeof TimeZoneStatus)[keyof typeof TimeZoneStatus] | (string & {});

export const timeZoneStatusSchema: EnumSchema<TimeZoneStatus> = s.enumOf<TimeZoneStatus>(TimeZoneStatus);
