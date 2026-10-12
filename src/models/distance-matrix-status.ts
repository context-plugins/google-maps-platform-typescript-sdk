import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status codes returned by service.
 * - `OK` indicates the response contains a valid result.
 * - `INVALID_REQUEST` indicates that the provided request was invalid.
 * - `MAX_ELEMENTS_EXCEEDED` indicates that the product of origins and destinations exceeds the
 *   per-query limit.
 * - `MAX_DIMENSIONS_EXCEEDED` indicates that the number of origins or destinations exceeds the
 *   per-query limit.
 * - `OVER_DAILY_LIMIT` indicates any of the following:
 *   - The API key is missing or invalid.
 *   - Billing has not been enabled on your account.
 *   - A self-imposed usage cap has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 * - `OVER_QUERY_LIMIT` indicates the service has received too many requests from your application
 *   within the allowed time period.
 * - `REQUEST_DENIED` indicates that the service denied use of the Distance Matrix service by your
 *   application.
 * - `UNKNOWN_ERROR` indicates a Distance Matrix request could not be processed due to a server
 *   error. The request may succeed if you try again.
 */
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
