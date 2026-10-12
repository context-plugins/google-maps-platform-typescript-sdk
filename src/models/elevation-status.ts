import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status codes returned by service.
 * - `OK` indicating the API request was successful.
 * - `DATA_NOT_AVAILABLE` indicating that there's no available data for the input locations.
 * - `INVALID_REQUEST` indicating the API request was malformed.
 * - `OVER_DAILY_LIMIT` indicating any of the following:
 *   - The API key is missing or invalid.
 *   - Billing has not been enabled on your account.
 *   - A self-imposed usage cap has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 * - `OVER_QUERY_LIMIT` indicating the requestor has exceeded quota.
 * - `REQUEST_DENIED` indicating the API did not complete the request.
 * - `UNKNOWN_ERROR` indicating an unknown error.
 */
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
