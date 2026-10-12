import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distanceMatrixRowSchema, type DistanceMatrixRow } from "./distance-matrix-row.js";
import { distanceMatrixStatusSchema, type DistanceMatrixStatus } from "./distance-matrix-status.js";

export type DistanceMatrixResponse = {
  /**
   * An array of addresses as returned by the API from your original request. These are formatted by
   * the geocoder and localized according to the language parameter passed with the request. This
   * content is meant to be read as-is. Do not programatically parse the formatted addresses.
   */
  originAddresses: string[];
  /**
   * An array of addresses as returned by the API from your original request. As with
   * `origin_addresses`, these are localized if appropriate. This content is meant to be read as-is.
   * Do not programatically parse the formatted addresses.
   */
  destinationAddresses: string[];
  /**
   * An array of elements, which in turn each contain a `status`, `duration`, and `distance`
   * element.
   */
  rows: DistanceMatrixRow[];
  status: DistanceMatrixStatus;
  /**
   * A string containing the human-readable text of any errors encountered while the request was
   * being processed.
   */
  errorMessage?: string;
};

export const distanceMatrixResponseSchema: Schema<DistanceMatrixResponse> = s.object<DistanceMatrixResponse>({
  originAddresses: s.array(s.string()),
  destinationAddresses: s.array(s.string()),
  rows: s.array(s.lazy(() => distanceMatrixRowSchema)),
  status: distanceMatrixStatusSchema,
  errorMessage: s.optional(s.string()),
  _keysMap: {
    originAddresses: "origin_addresses",
    destinationAddresses: "destination_addresses",
    errorMessage: "error_message",
  },
});
