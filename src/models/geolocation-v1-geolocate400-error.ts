import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type GeolocationV1Geolocate400Error = {
  error: ErrorObject;
};

export const geolocationV1Geolocate400ErrorSchema: Schema<GeolocationV1Geolocate400Error> =
  s.object<GeolocationV1Geolocate400Error>({
    error: errorObjectSchema,
  });
