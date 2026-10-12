import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  placeAutocompletePredictionSchema,
  type PlaceAutocompletePrediction,
} from "./place-autocomplete-prediction.js";
import {
  placesAutocompleteStatusSchema,
  type PlacesAutocompleteStatus,
} from "./places-autocomplete-status.js";

export type PlacesQueryAutocompleteResponse = {
  /** Contains an array of predictions. */
  predictions: PlaceAutocompletePrediction[];
  status: PlacesAutocompleteStatus;
  /**
   * When the service returns a status code other than `OK`, there may be an additional
   * `error_message` field within the response object. This field contains more detailed information
   * about thereasons behind the given status code. This field is not always returned, and its
   * content is subject to change.
   */
  errorMessage?: string;
  /**
   * When the service returns additional information about the request specification, there may be
   * an additional `info_messages` field within the response object. This field is only returned for
   * successful requests. It may not always be returned, and its content is subject to change.
   */
  infoMessages?: string[];
};

export const placesQueryAutocompleteResponseSchema: Schema<PlacesQueryAutocompleteResponse> =
  s.object<PlacesQueryAutocompleteResponse>({
    predictions: s.array(s.lazy(() => placeAutocompletePredictionSchema)),
    status: placesAutocompleteStatusSchema,
    errorMessage: s.optional(s.string()),
    infoMessages: s.optional(s.array(s.string())),
    _keysMap: {
      errorMessage: "error_message",
      infoMessages: "info_messages",
    },
  });
