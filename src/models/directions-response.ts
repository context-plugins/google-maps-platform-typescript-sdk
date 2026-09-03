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
  geocodedWaypoints?: DirectionsGeocodedWaypoint[];
  routes: DirectionsRoute[];
  status: DirectionsStatus;
  availableTravelModes?: TravelMode[];
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
