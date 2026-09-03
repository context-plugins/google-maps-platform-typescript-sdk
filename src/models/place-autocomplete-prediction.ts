import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  placeAutocompleteMatchedSubstringSchema,
  type PlaceAutocompleteMatchedSubstring,
} from "./place-autocomplete-matched-substring.js";
import {
  placeAutocompleteStructuredFormatSchema,
  type PlaceAutocompleteStructuredFormat,
} from "./place-autocomplete-structured-format.js";
import { placeAutocompleteTermSchema, type PlaceAutocompleteTerm } from "./place-autocomplete-term.js";

export type PlaceAutocompletePrediction = {
  description: string;
  matchedSubstrings: PlaceAutocompleteMatchedSubstring[];
  placeId?: string;
  reference?: string;
  structuredFormatting: PlaceAutocompleteStructuredFormat;
  terms: PlaceAutocompleteTerm[];
  types?: string[];
  distanceMeters?: number;
};

export const placeAutocompletePredictionSchema: Schema<PlaceAutocompletePrediction> =
  s.object<PlaceAutocompletePrediction>({
    description: s.string(),
    matchedSubstrings: s.array(s.lazy(() => placeAutocompleteMatchedSubstringSchema)),
    placeId: s.optional(s.string()),
    reference: s.optional(s.string()),
    structuredFormatting: placeAutocompleteStructuredFormatSchema,
    terms: s.array(s.lazy(() => placeAutocompleteTermSchema)),
    types: s.optional(s.array(s.string())),
    distanceMeters: s.optional(s.number()),
    _keysMap: {
      matchedSubstrings: "matched_substrings",
      placeId: "place_id",
      structuredFormatting: "structured_formatting",
      distanceMeters: "distance_meters",
    },
  });
