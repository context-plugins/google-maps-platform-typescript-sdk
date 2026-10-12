import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status codes returned by service.
 * - `OK` indicating the API request was successful.
 * - `ZERO_RESULTS` indicating that the referenced location, `place_id`, was valid but no longer
 *   refers to a valid result. This may occur if the establishment is no longer in business.
 * - `NOT_FOUND` indicating that that the referenced location, `place_id`, was not found in the
 *   Places database.
 * - `INVALID_REQUEST` indicating the API request was malformed.
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
export const PlacesDetailsStatus = {
  Ok: "OK",
  ZeroResults: "ZERO_RESULTS",
  InvalidRequest: "INVALID_REQUEST",
  NotFound: "NOT_FOUND",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type PlacesDetailsStatus =
  | (typeof PlacesDetailsStatus)[keyof typeof PlacesDetailsStatus]
  | (string & {});

export const placesDetailsStatusSchema: EnumSchema<PlacesDetailsStatus> =
  s.enumOf<PlacesDetailsStatus>(PlacesDetailsStatus);
