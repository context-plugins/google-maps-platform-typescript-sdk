import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type DirectionsTransitStop = {
  location: Location;
  name: string;
};

export const directionsTransitStopSchema: Schema<DirectionsTransitStop> = s.object<DirectionsTransitStop>({
  location: locationSchema,
  name: s.string(),
});
