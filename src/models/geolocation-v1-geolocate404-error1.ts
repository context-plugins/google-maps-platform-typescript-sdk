import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type GeolocationV1Geolocate404Error1 = {
  error: ErrorObject;
};

export const geolocationV1Geolocate404Error1Schema: Schema<GeolocationV1Geolocate404Error1> =
  s.object<GeolocationV1Geolocate404Error1>({
    error: errorObjectSchema,
  });
