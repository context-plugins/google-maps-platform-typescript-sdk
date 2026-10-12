import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  placeAutocompleteMatchedSubstringSchema,
  type PlaceAutocompleteMatchedSubstring,
} from "./place-autocomplete-matched-substring.js";

export type PlaceAutocompleteStructuredFormat = {
  /** Contains the main text of a prediction, usually the name of the place. */
  mainText: string;
  /**
   * Contains an array with `offset` value and `length`. These describe the location of the entered
   * term in the prediction result text, so that the term can be highlighted if desired.
   */
  mainTextMatchedSubstrings: PlaceAutocompleteMatchedSubstring[];
  /** Contains the secondary text of a prediction, usually the location of the place. */
  secondaryText?: string;
  /**
   * Contains an array with `offset` value and `length`. These describe the location of the entered
   * term in the prediction result text, so that the term can be highlighted if desired.
   */
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
