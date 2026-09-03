import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type GeolocationResponse = {
  location: Location;
  accuracy: number;
};

export const geolocationResponseSchema: Schema<GeolocationResponse> = s.object<GeolocationResponse>({
  location: locationSchema,
  accuracy: s.number(),
});
