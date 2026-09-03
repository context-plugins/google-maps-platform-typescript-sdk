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
  predictions: PlaceAutocompletePrediction[];
  status: PlacesAutocompleteStatus;
  errorMessage?: string;
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
