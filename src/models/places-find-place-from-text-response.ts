import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placeSchema, type Place } from "./place.js";
import { placesSearchStatusSchema, type PlacesSearchStatus } from "./places-search-status.js";

export type PlacesFindPlaceFromTextResponse = {
  /**
   * Contains an array of Place candidates. <div class="caution">Place Search requests return a
   * subset of the fields that are returned by Place Details requests. If the field you want is not
   * returned by Place Search, you can use Place Search to get a place_id, then use that Place ID to
   * make a Place Details request.</div>
   */
  candidates: Place[];
  status: PlacesSearchStatus;
  /**
   * When the service returns a status code other than `OK<`, there may be an additional
   * `error_message` field within the response object. This field contains more detailed information
   * about thereasons behind the given status code. This field is not always returned, and its
   * content is subject to change.
   */
  errorMessage?: string;
  /**
   * When the service returns additional information about the request specification, there may be
   * an additional `info_messages` field within the response object. This field is only returned for
   * successful requests. It may not always be returned, and its content is subject to change.
   */
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
