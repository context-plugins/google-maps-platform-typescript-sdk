import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The `status` field within the Time Zone response object contains the status of the request. The
 * `status` field may contain the following values:
 *
 * - `OK` indicates that the request was successful.
 * - `INVALID_REQUEST` indicates that the request was malformed.
 * - `OVER_DAILY_LIMIT` indicates any of the following:
 *   - The API key is missing or invalid.
 *   - Billing has not been enabled on your account.
 *   - A self-imposed usage cap has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 *
 * - `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
 * - `REQUEST_DENIED` indicates that the API did not complete the request. Confirm that the request
 *   was sent over HTTPS instead of HTTP.
 * - `UNKNOWN_ERROR` indicates an unknown error.
 * - `ZERO_RESULTS` indicates that no time zone data could be found for the specified position or
 *   time. Confirm that the request is for a location on land, and not over water.
 */
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
