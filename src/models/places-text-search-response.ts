import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placeSchema, type Place } from "./place.js";
import { placesSearchStatusSchema, type PlacesSearchStatus } from "./places-search-status.js";

export type PlacesTextSearchResponse = {
  /**
   * May contain a set of attributions about this listing which must be displayed to the user (some
   * listings may not have attribution).
   */
  htmlAttributions: string[];
  /**
   * Contains an array of places. <div class="caution">Place Search requests return a subset of the
   * fields that are returned by Place Details requests. If the field you want is not returned by
   * Place Search, you can use Place Search to get a `place_id`, then use that Place ID to make a
   * Place Details request.</div>
   */
  results: Place[];
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
  /**
   * Contains a token that can be used to return up to 20 additional results. A next_page_token will
   * not be returned if there are no additional results to display. The maximum number of results
   * that can be returned is 60. There is a short delay between when a next_page_token is issued,
   * and when it will become valid.
   */
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
