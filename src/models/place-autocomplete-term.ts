import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceAutocompleteTerm = {
  value: string;
  offset: number;
};

export const placeAutocompleteTermSchema: Schema<PlaceAutocompleteTerm> = s.object<PlaceAutocompleteTerm>({
  value: s.string(),
  offset: s.number(),
});
