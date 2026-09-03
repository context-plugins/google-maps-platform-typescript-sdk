import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlacesAutocompleteStatus = {
  Ok: "OK",
  ZeroResults: "ZERO_RESULTS",
  InvalidRequest: "INVALID_REQUEST",
  OverQueryLimit: "OVER_QUERY_LIMIT",
  RequestDenied: "REQUEST_DENIED",
  UnknownError: "UNKNOWN_ERROR",
} as const;
export type PlacesAutocompleteStatus =
  | (typeof PlacesAutocompleteStatus)[keyof typeof PlacesAutocompleteStatus]
  | (string & {});

export const placesAutocompleteStatusSchema: EnumSchema<PlacesAutocompleteStatus> =
  s.enumOf<PlacesAutocompleteStatus>(PlacesAutocompleteStatus);
