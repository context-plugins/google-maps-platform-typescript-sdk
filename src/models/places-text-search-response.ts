import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placeSchema, type Place } from "./place.js";
import { placesSearchStatusSchema, type PlacesSearchStatus } from "./places-search-status.js";

export type PlacesTextSearchResponse = {
  htmlAttributions: string[];
  results: Place[];
  status: PlacesSearchStatus;
  errorMessage?: string;
  infoMessages?: string[];
  nextPageToken?: string;
};

export const placesTextSearchResponseSchema: Schema<PlacesTextSearchResponse> =
  s.object<PlacesTextSearchResponse>({
    htmlAttributions: s.array(s.string()),
    results: s.array(s.lazy(() => placeSchema)),
    status: placesSearchStatusSchema,
    errorMessage: s.optional(s.string()),
    infoMessages: s.optional(s.array(s.string())),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      htmlAttributions: "html_attributions",
      errorMessage: "error_message",
      infoMessages: "info_messages",
      nextPageToken: "next_page_token",
    },
  });
