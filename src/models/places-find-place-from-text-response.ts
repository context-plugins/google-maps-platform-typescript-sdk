import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placeSchema, type Place } from "./place.js";
import { placesSearchStatusSchema, type PlacesSearchStatus } from "./places-search-status.js";

export type PlacesFindPlaceFromTextResponse = {
  candidates: Place[];
  status: PlacesSearchStatus;
  errorMessage?: string;
  infoMessages?: string[];
};

export const placesFindPlaceFromTextResponseSchema: Schema<PlacesFindPlaceFromTextResponse> =
  s.object<PlacesFindPlaceFromTextResponse>({
    candidates: s.array(s.lazy(() => placeSchema)),
    status: placesSearchStatusSchema,
    errorMessage: s.optional(s.string()),
    infoMessages: s.optional(s.array(s.string())),
    _keysMap: {
      errorMessage: "error_message",
      infoMessages: "info_messages",
    },
  });
