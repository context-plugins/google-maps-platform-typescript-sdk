import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  directionsGeocodedWaypointSchema,
  type DirectionsGeocodedWaypoint,
} from "./directions-geocoded-waypoint.js";
import { directionsRouteSchema, type DirectionsRoute } from "./directions-route.js";
import { directionsStatusSchema, type DirectionsStatus } from "./directions-status.js";
import { travelModeSchema, type TravelMode } from "./travel-mode.js";

export type DirectionsResponse = {
  /**
   * Contains an array with details about the geocoding of origin, destination and waypoints.
   * Elements in the geocoded_waypoints array correspond, by their zero-based position, to the
   * origin, the waypoints in the order they are specified, and the destination.
   *
   * These details will not be present for waypoints specified as textual latitude/longitude values
   * if the service returns no results. This is because such waypoints are only reverse geocoded to
   * obtain their representative address after a route has been found. An empty JSON object will
   * occupy the corresponding places in the geocoded_waypoints array.
   */
  geocodedWaypoints?: DirectionsGeocodedWaypoint[];
  /**
   * Contains an array of routes from the origin to the destination. Routes consist of nested Legs
   * and Steps.
   */
  routes: DirectionsRoute[];
  status: DirectionsStatus;
  /**
   * Contains an array of available travel modes. This field is returned when a request specifies a
   * travel mode and gets no results. The array contains the available travel modes in the countries
   * of the given set of waypoints. This field is not returned if one or more of the waypoints are
   * 'via waypoints'.
   */
  availableTravelModes?: TravelMode[];
  /**
   * When the service returns a status code other than `OK`, there may be an additional
   * `error_message` field within the response object. This field contains more detailed information
   * about the reasons behind the given status code. This field is not always returned, and its
   * content is subject to change.
   */
  errorMessage?: string;
};

export const directionsResponseSchema: Schema<DirectionsResponse> = s.object<DirectionsResponse>({
  geocodedWaypoints: s.optional(s.array(s.lazy(() => directionsGeocodedWaypointSchema))),
  routes: s.array(s.lazy(() => directionsRouteSchema)),
  status: directionsStatusSchema,
  availableTravelModes: s.optional(s.array(s.lazy(() => travelModeSchema))),
  errorMessage: s.optional(s.string()),
  _keysMap: {
    geocodedWaypoints: "geocoded_waypoints",
    availableTravelModes: "available_travel_modes",
    errorMessage: "error_message",
  },
});
