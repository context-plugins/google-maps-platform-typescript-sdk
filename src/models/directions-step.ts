import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distanceSchema, type Distance } from "./distance.js";
import { durationSchema, type Duration } from "./duration.js";
import { endLocationSchema, type EndLocation } from "./end-location.js";
import { maneuverSchema, type Maneuver } from "./maneuver.js";
import { polylineSchema, type Polyline } from "./polyline.js";
import { startLocationSchema, type StartLocation } from "./start-location.js";
import { transitDetailsSchema, type TransitDetails } from "./transit-details.js";
import { travelModeSchema, type TravelMode } from "./travel-mode.js";

export type DirectionsStep = {
  distance?: Distance;
  duration: Duration;
  endLocation: EndLocation;
  htmlInstructions: string;
  maneuver?: Maneuver;
  polyline: Polyline;
  startLocation: StartLocation;
  transitDetails?: TransitDetails;
  travelMode: TravelMode;
  steps?: Record<string, unknown>;
};

export const directionsStepSchema: Schema<DirectionsStep> = s.object<DirectionsStep>({
  distance: s.optional(s.lazy(() => distanceSchema)),
  duration: durationSchema,
  endLocation: endLocationSchema,
  htmlInstructions: s.string(),
  maneuver: s.optional(s.lazy(() => maneuverSchema)),
  polyline: polylineSchema,
  startLocation: startLocationSchema,
  transitDetails: s.optional(s.lazy(() => transitDetailsSchema)),
  travelMode: travelModeSchema,
  steps: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    endLocation: "end_location",
    htmlInstructions: "html_instructions",
    startLocation: "start_location",
    transitDetails: "transit_details",
    travelMode: "travel_mode",
  },
});
