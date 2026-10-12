import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snappedPointSchema, type SnappedPoint } from "./snapped-point.js";

export type NearestRoadsResponse = {
  /**
   * An array of snapped points. Sometimes containing several snapped points for the same point with
   * differing placeId or location.
   */
  snappedPoints?: SnappedPoint[];
};

export const nearestRoadsResponseSchema: Schema<NearestRoadsResponse> = s.object<NearestRoadsResponse>({
  snappedPoints: s.optional(s.array(s.lazy(() => snappedPointSchema))),
});
