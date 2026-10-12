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
  /**
   * Contains the human-readable name for the returned result. For `establishment` results, this is
   * usually the business name. This content is meant to be read as-is. Do not programmatically
   * parse the formatted address.
   */
  description: string;
  /**
   * A list of substrings that describe the location of the entered term in the prediction result
   * text, so that the term can be highlighted if desired.
   */
  matchedSubstrings: PlaceAutocompleteMatchedSubstring[];
  /**
   * A textual identifier that uniquely identifies a place. To retrieve information about the place,
   * pass this identifier in the placeId field of a Places API request. For more information about
   * place IDs, see the [Place
   * IDs](https://developers.google.com/maps/documentation/places/web-service/place-id) overview.
   */
  placeId?: string;
  /**
   * See place_id.
   *
   * @deprecated
   */
  reference?: string;
  structuredFormatting: PlaceAutocompleteStructuredFormat;
  /**
   * Contains an array of terms identifying each section of the returned description (a section of
   * the description is generally terminated with a comma). Each entry in the array has a `value`
   * field, containing the text of the term, and an `offset` field, defining the start position of
   * this term in the description, measured in Unicode characters.
   */
  terms: PlaceAutocompleteTerm[];
  /**
   * Contains an array of types that apply to this place. For example: `[ "political", "locality" ]`
   * or `[ "establishment", "geocode", "beauty_salon" ]`. The array can contain multiple values.
   * Learn more about [Place
   * types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
   */
  types?: string[];
  /**
   * The straight-line distance in meters from the origin. This field is only returned for requests
   * made with an `origin`.
   */
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
    distanceMeters: s.optional(s.int()),
    _keysMap: {
      matchedSubstrings: "matched_substrings",
      placeId: "place_id",
      structuredFormatting: "structured_formatting",
      distanceMeters: "distance_meters",
    },
  });
