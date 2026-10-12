import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placesDetailsStatusSchema, type PlacesDetailsStatus } from "./places-details-status.js";
import { result2Schema, type Result2 } from "./result2.js";

export type PlacesDetailsResponse = {
  /**
   * May contain a set of attributions about this listing which must be displayed to the user (some
   * listings may not have attribution).
   */
  htmlAttributions: string[];
  result: Result2;
  status: PlacesDetailsStatus;
  /**
   * When the service returns additional information about the request specification, there may be
   * an additional `info_messages` field within the response object. This field is only returned for
   * successful requests. It may not always be returned, and its content is subject to change.
   */
  infoMessages?: string[];
};

export const placesDetailsResponseSchema: Schema<PlacesDetailsResponse> = s.object<PlacesDetailsResponse>({
  htmlAttributions: s.array(s.string()),
  result: result2Schema,
  status: placesDetailsStatusSchema,
  infoMessages: s.optional(s.array(s.string())),
  _keysMap: {
    htmlAttributions: "html_attributions",
    infoMessages: "info_messages",
  },
});
