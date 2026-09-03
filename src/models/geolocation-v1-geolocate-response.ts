import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type GeolocationV1GeolocateResponse = {
  location: Location;
  accuracy: number;
};

export const geolocationV1GeolocateResponseSchema: Schema<GeolocationV1GeolocateResponse> =
  s.object<GeolocationV1GeolocateResponse>({
    location: locationSchema,
    accuracy: s.number(),
  });
