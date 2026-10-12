import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status codes returned by service.
 * - `OK` indicating the API request was successful.
 * - `ZERO_RESULTS` indicating that the search was successful but returned no results. This may
 *   occur if the search was passed a `latlng` in a remote location.
 * - `INVALID_REQUEST` indicating the API request was malformed, generally due to missing required
 *   query parameter (`location` or `radius`).
 * - `OVER_QUERY_LIMIT` indicating any of the following:
 *   - You have exceeded the QPS limits.
 *   - Billing has not been enabled on your account.
 *   - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 *     See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more
 *     information about how to resolve this error.
 * - `REQUEST_DENIED` indicating that your request was denied, generally because:
 *   - The request is missing an API key.
 *   - The `key` parameter is invalid.
 * - `UNKNOWN_ERROR` indicating an unknown error.
 */
export const PlacesSearchStatus = {
  Ok: "OK",
  ZeroResults: "ZERO_RESULTS",
  InvalidRequest: "INVALID_REQUEST",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type PlacesSearchStatus = (typeof PlacesSearchStatus)[keyof typeof PlacesSearchStatus] | (string & {});

export const placesSearchStatusSchema: EnumSchema<PlacesSearchStatus> =
  s.enumOf<PlacesSearchStatus>(PlacesSearchStatus);
