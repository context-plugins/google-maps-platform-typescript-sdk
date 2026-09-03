import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type GeolocationV1Geolocate404Error = {
  error: ErrorObject;
};

export const geolocationV1Geolocate404ErrorSchema: Schema<GeolocationV1Geolocate404Error> =
  s.object<GeolocationV1Geolocate404Error>({
    error: errorObjectSchema,
  });
