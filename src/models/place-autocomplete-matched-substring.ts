import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceAutocompleteMatchedSubstring = {
  /** Length of the matched substring in the prediction result text. */
  length: number;
  /** Start location of the matched substring in the prediction result text. */
  offset: number;
};

export const placeAutocompleteMatchedSubstringSchema: Schema<PlaceAutocompleteMatchedSubstring> =
  s.object<PlaceAutocompleteMatchedSubstring>({
    length: s.float64(),
    offset: s.float64(),
  });
