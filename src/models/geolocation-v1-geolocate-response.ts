import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type GeolocationV1GeolocateResponse = {
  location: Location;
  /**
   * The accuracy of the estimated location, in meters. This represents the radius of a circle
   * around the given `location`. If your Geolocation response shows a very high value in the
   * `accuracy` field, the service may be geolocating based on the request IP, instead of WiFi
   * points or cell towers. This can happen if no cell towers or access points are valid or
   * recognized. To confirm that this is the issue, set `considerIp` to `false` in your request. If
   * the response is a `404`, you've confirmed that your `wifiAccessPoints` and `cellTowers` objects
   * could not be geolocated.
   */
  accuracy: number;
};

export const geolocationV1GeolocateResponseSchema: Schema<GeolocationV1GeolocateResponse> =
  s.object<GeolocationV1GeolocateResponse>({
    location: locationSchema,
    accuracy: s.float64(),
  });
