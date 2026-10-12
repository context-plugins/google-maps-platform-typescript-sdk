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

/**
 * Each element in the steps array defines a single step of the calculated directions. A step is the
 * most atomic unit of a direction's route, containing a single step describing a specific, single
 * instruction on the journey. E.g. "Turn left at W. 4th St." The step not only describes the
 * instruction but also contains distance and duration information relating to how this step relates
 * to the following step. For example, a step denoted as "Merge onto I-80 West" may contain a
 * duration of "37 miles" and "40 minutes," indicating that the next step is 37 miles/40 minutes
 * from this step.
 *
 * When using the Directions API to search for transit directions, the steps array will include
 * additional transit details in the form of a transit_details array. If the directions include
 * multiple modes of transportation, detailed directions will be provided for walking or driving
 * steps in an inner steps array. For example, a walking step will include directions from the start
 * and end locations: "Walk to Innes Ave & Fitch St". That step will include detailed walking
 * directions for that route in the inner steps array, such as: "Head north-west", "Turn left onto
 * Arelious Walker", and "Turn left onto Innes Ave".
 */
export type DirectionsStep = {
  distance?: Distance;
  duration: Duration;
  endLocation: EndLocation;
  /**
   * Contains formatted instructions for this step, presented as an HTML text string. This content
   * is meant to be read as-is. Do not programmatically parse this display-only content.
   */
  htmlInstructions: string;
  maneuver?: Maneuver;
  polyline: Polyline;
  startLocation: StartLocation;
  transitDetails?: TransitDetails;
  travelMode: TravelMode;
  /**
   * Contains detailed directions for walking or driving steps in transit directions. Substeps are
   * only available when travel_mode is set to "transit". The inner steps array is of the same type
   * as steps.
   */
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
