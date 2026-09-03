import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placesDetailsStatusSchema, type PlacesDetailsStatus } from "./places-details-status.js";
import { result2Schema, type Result2 } from "./result2.js";

export type PlacesDetailsResponse = {
  htmlAttributions: string[];
  result: Result2;
  status: PlacesDetailsStatus;
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
