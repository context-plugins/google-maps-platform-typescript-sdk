import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceAutocompleteTerm = {
  /** The text of the term. */
  value: string;
  /** Defines the start position of this term in the description, measured in Unicode characters */
  offset: number;
};

export const placeAutocompleteTermSchema: Schema<PlaceAutocompleteTerm> = s.object<PlaceAutocompleteTerm>({
  value: s.string(),
  offset: s.float64(),
});
