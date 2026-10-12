import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The `status` field within the Streetview Metadata response object contains the status of the
 * request. The `status` field may contain the following values:
 *
 * - `OK` indicates that no errors occurred; a panorama is found and metadata is returned.
 * - `INVALID_REQUEST` indicates that the request was malformed.
 * - `NOT_FOUND` indicates that the address string provided in the `location` parameter could not be
 *   found. This may occur if a non-existent address is given.
 * - `ZERO_RESULTS` indicates that no panorama could be found near the provided location. This may
 *   occur if a non-existent or invalid `pano` id is given.
 * - `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
 * - `REQUEST_DENIED` indicates that your request was denied. This may occur if you did not
 *   [authorize](https://developers.google.com/maps/documentation/streetview/get-api-key) your
 *   request, or if the Street View Static API is not activated in the Google Cloud Console project
 *   containing your API key.
 * - `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. This
 *   is often a temporary status. The request may succeed if you try again
 */
export const StreetViewStatus = {
  Ok: "OK",
  InvalidRequest: "INVALID_REQUEST",
  NotFound: "NOT_FOUND",
  ZeroResults: "ZERO_RESULTS",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type StreetViewStatus = (typeof StreetViewStatus)[keyof typeof StreetViewStatus] | (string & {});

export const streetViewStatusSchema: EnumSchema<StreetViewStatus> =
  s.enumOf<StreetViewStatus>(StreetViewStatus);
