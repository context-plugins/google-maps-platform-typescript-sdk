import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bounds1Schema, type Bounds1 } from "./bounds1.js";
import { directionsLegSchema, type DirectionsLeg } from "./directions-leg.js";
import { fare1Schema, type Fare1 } from "./fare1.js";
import { overviewPolylineSchema, type OverviewPolyline } from "./overview-polyline.js";

export type DirectionsRoute = {
  legs: DirectionsLeg[];
  bounds: Bounds1;
  copyrights: string;
  summary: string;
  waypointOrder: number[];
  warnings: string[];
  overviewPolyline: OverviewPolyline;
  fare?: Fare1;
};

export const directionsRouteSchema: Schema<DirectionsRoute> = s.object<DirectionsRoute>({
  legs: s.array(s.lazy(() => directionsLegSchema)),
  bounds: bounds1Schema,
  copyrights: s.string(),
  summary: s.string(),
  waypointOrder: s.array(s.number()),
  warnings: s.array(s.string()),
  overviewPolyline: overviewPolylineSchema,
  fare: s.optional(s.lazy(() => fare1Schema)),
  _keysMap: {
    waypointOrder: "waypoint_order",
    overviewPolyline: "overview_polyline",
  },
});
