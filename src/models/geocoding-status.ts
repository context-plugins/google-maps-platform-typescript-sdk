import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The `status` field within the Geocoding response object contains the status of the request, and
 * may contain debugging information to help you track down why geocoding is not working. The
 * "status" field may contain the following values:
 *
 * - `OK` indicates that no errors occurred; the address was successfully parsed and at least one
 *   geocode was returned.
 * - `ZERO_RESULTS` indicates that the geocode was successful but returned no results. This may
 *   occur if the geocoder was passed a non-existent address or a `latlng` in a remote location.
 * - `OVER_DAILY_LIMIT` indicates any of the following:
 *   - The API key is missing or invalid.
 *   - Billing has not been enabled on your account.
 *   - A self-imposed usage cap has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 * - `OVER_QUERY_LIMIT` indicates that you are over your quota.
 * - `REQUEST_DENIED` indicates that your request was denied.
 * - `INVALID_REQUEST` generally indicates that the query (address, components, or latlng) is
 *   missing.
 * - `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. The
 *   request may succeed if you try again.
 */
export const GeocodingStatus = {
  Ok: "OK",
  InvalidRequest: "INVALID_REQUEST",
  OverDailyLimit: "OVER_DAILY_LIMIT",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
  ZeroResults: "ZERO_RESULTS",
} as const;
export type GeocodingStatus = (typeof GeocodingStatus)[keyof typeof GeocodingStatus] | (string & {});

export const geocodingStatusSchema: EnumSchema<GeocodingStatus> = s.enumOf<GeocodingStatus>(GeocodingStatus);
