import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  placeAutocompleteMatchedSubstringSchema,
  type PlaceAutocompleteMatchedSubstring,
} from "./place-autocomplete-matched-substring.js";

export type PlaceAutocompleteStructuredFormat = {
  mainText: string;
  mainTextMatchedSubstrings: PlaceAutocompleteMatchedSubstring[];
  secondaryText?: string;
  secondaryTextMatchedSubstrings?: PlaceAutocompleteMatchedSubstring[];
};

export const placeAutocompleteStructuredFormatSchema: Schema<PlaceAutocompleteStructuredFormat> =
  s.object<PlaceAutocompleteStructuredFormat>({
    mainText: s.string(),
    mainTextMatchedSubstrings: s.array(s.lazy(() => placeAutocompleteMatchedSubstringSchema)),
    secondaryText: s.optional(s.string()),
    secondaryTextMatchedSubstrings: s.optional(
      s.array(s.lazy(() => placeAutocompleteMatchedSubstringSchema)),
    ),
    _keysMap: {
      mainText: "main_text",
      mainTextMatchedSubstrings: "main_text_matched_substrings",
      secondaryText: "secondary_text",
      secondaryTextMatchedSubstrings: "secondary_text_matched_substrings",
    },
  });
