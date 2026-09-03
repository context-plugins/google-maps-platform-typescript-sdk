import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectionsPolyline = {
  points: string;
};

export const directionsPolylineSchema: Schema<DirectionsPolyline> = s.object<DirectionsPolyline>({
  points: s.string(),
});
