import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OverviewPolyline = {
  /** A single string representation of the polyline. */
  points: string;
};

export const overviewPolylineSchema: Schema<OverviewPolyline> = s.object<OverviewPolyline>({
  points: s.string(),
});
